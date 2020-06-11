import React, { Component } from "react"

export default class Nav extends Component {
  render() {
    return (
      <div className="left-navi">
        <ul className="lst">
          <li className="active">
            <strong>콜뷰티APP 관리</strong>
            <ul>
              <li>
                <a href="#">공지사항관리</a>
              </li>
              <li className="active">
                <a href="#">시스템공지관리</a>
              </li>
              <li>
                <a href="#">FAQ관리</a>
              </li>
              <li>
                <a href="#">약관관리</a>
              </li>
              <li>
                <a href="#">APP버전관리</a>
              </li>
              <li>
                <a href="#">팝업관리</a>
              </li>
              <li>
                <a href="#">APP푸시메시지발송</a>
              </li>
            </ul>
          </li>
          <li>
            <strong>매칭 관리</strong>
            <ul>
              <li>
                <a href="#">매칭관리</a>
              </li>
            </ul>
          </li>
          <li>
            <strong>회원 관리</strong>
            <ul>
              <li>
                <a href="#">회원관리</a>
              </li>
              <li>
                <a href="#">SHOP회원관리</a>
              </li>
            </ul>
          </li>
          <li>
            <strong>관리자 관리</strong>
            <ul>
              <li>
                <a href="#">관리자 관리</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}
