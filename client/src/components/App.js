import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Listing from "./Listing"
import Main from "./Main"
import Post from "./Post"
import CreatePost from "./CreatePost"

export default props => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/Post/:id" component={Post}></Route>
          <Route exact path="/:id/create" component={CreatePost}></Route>
          <Route exact path="/Listing/:id" component={Listing}></Route>
        </Switch>
      </div>
    </Router>
  )
}
