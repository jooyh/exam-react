import React, { Component } from "react"
import Search from "./Search"

export default class Content extends Component {
  render() {
    var _nowPage = this.props.nowPage
    var data = this.props.data
    var contentType = this.props.type
    var contentEl

    return (
      <div id="contents">
        <Search></Search>
        {contentEl}
      </div>
    )
  }
}
