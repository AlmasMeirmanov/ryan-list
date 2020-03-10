import React from "react"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { useCats } from "../hooks"
export default props => {
  const { posts, getPosts, currentCategory } = useCats()

  useEffect(() => {
    getPosts(props.match.params.id)
  }, [props.match.params])
  return (
    <div>
      <h1>{currentCategory}</h1>
    </div>
  )
}
