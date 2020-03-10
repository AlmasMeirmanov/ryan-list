import React from "react"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { useCats } from "../hooks"
export default props => {
  const { post, getPosts, currentCategory } = useCats()
  console.log(post)
  useEffect(() => {
    getPosts(props.match.params.id)
  }, [props.match.params])
  return (
    <div>
      <h1>{currentCategory}</h1>
      <Link to={"/" + props.match.params.id + "/create"}>Create Post</Link>
      {post.map(p => (
        <div key={"c-posting" + p.id}>
          <Link to={`/posting/${p.id}`}>{p.name}</Link>
        </div>
      ))}
    </div>
  )
}
