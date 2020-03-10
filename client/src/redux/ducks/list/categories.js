import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

const GET_CATS = "list/GET_CATS"
const GET_CURRENT = "list/GET_CURRENT"

const initialState = {
  cats: [],
  current: "",
  post: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CATS:
      return { ...state, cats: action.payload }
    case GET_CURRENT:
      return {
        ...state,
        current: action.payload.category,
        post: action.payload.post
      }
    default:
      return state
  }
}

function getCurrent(id) {
  return dispatch => {
    axios.get("/api/category/" + id).then(resp => {
      dispatch({
        type: GET_CURRENT,
        payload: { category: resp.data.catName, post: resp.data.post }
      })
    })
  }
}

function getCats() {
  return dispatch => {
    axios.get("/api/categories").then(resp => {
      const data = resp.data
      dispatch({
        type: GET_CATS,
        payload: data
      })
    })
  }
}

export function useCats() {
  const dispatch = useDispatch()
  const cats = useSelector(appState => appState.catsState.cats)
  //const get = () => dispatch(getCategories())
  const getPosts = id => dispatch(getCurrent(id))
  const currentCategory = useSelector(appState => appState.catsState.current)
  const post = useSelector(appState => appState.catsState.post)

  useEffect(() => {
    dispatch(getCats())
  }, [dispatch])

  return { cats, getPosts, getCurrent, post, currentCategory }
}
