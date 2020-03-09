import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Listing from "./Listing"
import Main from "./Main"

export default props => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Main}></Route>
        <Route path="/Listing/:id" component={Listing}></Route>
      </div>
    </Router>
  )
}
