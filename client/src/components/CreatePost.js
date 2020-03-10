import React, { useState } from "react"

export default props => {
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <lable>Post Title</lable>
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
