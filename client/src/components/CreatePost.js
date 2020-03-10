import React, { useState } from "react"
import { usePost } from "../hooks"
export default props => {
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")

  const { create } = usePost()

  function handleSubmit(e) {
    e.preventDefault()
    create(props.match.params.id, name, desc).then(id => {
      props.history.push("/post/" + id)
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Post Title</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Posting Title"
          ></input>
          <label> Post Description</label>
          <textarea
            onChange={e => setDesc(e.target.value)}
            value={desc}
          ></textarea>
          <button type="submit">Create Post</button>
        </div>
      </form>
    </div>
  )
}
