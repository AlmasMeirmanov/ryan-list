import React from "react"
export default props => {
  return <h1>{props.match.params.id}</h1>
}
