import React, { Component } from "react"
import "./App.css"
import LayoutTypeA from "./components/layout/LayoutTypeA"

export default class App extends Component {
  render() {
    return (
      <div id="container" className="App">
        <LayoutTypeA></LayoutTypeA>
      </div>
    )
  }
}
