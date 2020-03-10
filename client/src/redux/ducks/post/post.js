import { useDispatch, useSelector } from "react-redux"
import Axios from "axios"

const CREATE = "post/CREATE"

const initialState = {
  post: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE:
      return { ...state, post: action.payload }
    default:
      return state
  }
}

function getPost(id) {
  return dispatch => {
    Axios.get("/api/post/" + id).then(resp => {
      dispatch({
        type: CREATE,
        payload: resp.data[0]
      })
    })
  }
}

function createPost(id, name, post) {
  return new Promise((resolve, reject) => {
    Axios.post("/api/post", { id, name, post })
      .then(resp => {
        resolve(resp.data.id)
      })
      .catch(e => {
        reject()
      })
  })
}

export function usePost() {
  const dispatch = useDispatch()
  const create = (id, name, post) => createPost(id, name, post)
  const get = id => dispatch(getPost(id))
  const post = useSelector(appState => appState.postState.post)

  return { create, post, get }
}
