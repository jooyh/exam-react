import React, { Component } from "react"

export default class Title extends Component {
  render() {
    return (
      <div className="tit-box">
        <div className="fr">
          <ul className="location-list">
            <li>
              <a href="#" className="home">
                처음으로
              </a>
            </li>
            <li>
              <a href="#">콜뷰티APP관리</a>
            </li>
            <li>
              <a href="#" className="active">
                시스템공지
              </a>
            </li>
          </ul>
        </div>
        <h3>시스템 공지</h3>
      </div>
    )
  }
}
