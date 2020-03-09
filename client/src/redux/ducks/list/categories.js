import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

const GET_CATS = "list/GET_CATS"

const initialState = {
  cats: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CATS:
      return { ...state, cats: action.payload }
    default:
      return state
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

  useEffect(() => {
    dispatch(getCats())
  }, [dispatch])

  return { cats }
}
