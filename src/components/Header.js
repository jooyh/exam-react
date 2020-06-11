import React, { Component } from "react"

export default class header extends Component {
  render() {
    return (
      <header>
        <div className="fl">
          <h1>
            <a href="#">
              <img src="../common/images/common/img_sub_logo.png" alt="콜뷰티 로고"></img>
            </a>
          </h1>
          <h2>관/리/시/스/템</h2>
        </div>

        <div className="fr">
          <span className="name">
            <strong>{this.props.loginInfo.userNm}</strong>님
          </span>
          <button type="button" className="btn-logout">
            로그아웃
          </button>
        </div>
      </header>
    )
  }
}
