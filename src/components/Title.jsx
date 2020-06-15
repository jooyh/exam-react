import React, { Component } from "react"

export default class Title extends Component {
  render() {
    var menuInfo = this.props.menuInfo
    console.log(menuInfo)
    return (
      <div className="tit-box">
        <h3>{menuInfo.menuNm}</h3>
      </div>
    )
  }
}
