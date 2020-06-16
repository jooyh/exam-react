import React, { Component } from "react"
import ListContent from "../../containers/ListContent"
import DetailContent from "../../containers/DetailContent"
import WriteContent from "../../containers/WriteContent"
export default class Content extends Component {
  render() {
    var contentEl
    if (this.props.contentType === "list") {
      contentEl = <ListContent></ListContent>
    } else if (this.props.contentType === "detail") {
      contentEl = <DetailContent></DetailContent>
    } else if (this.props.contentType === "create") {
      contentEl = <WriteContent></WriteContent>
    } else if (this.props.contentType === "update") {
      contentEl = <WriteContent></WriteContent>
    } else if (this.props.contentType === "delete") {
    }
    return <div id="contents">{contentEl}</div>
  }
}
