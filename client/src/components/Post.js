import React, { useEffect } from "react"
import { usePost } from "../hooks"

export default props => {
  const { get, post } = usePost()

  useEffect(() => {
    get(props.match.params.id)
  }, [props.match.params])

  return (
    <div>
      <p>Name: {post.name}</p>
      <p>Posting: {post.posting}</p>
    </div>
  )
}
