import React, { Component } from "react"
import Header from "./components/Header"
import Nav from "./components/Nav"
import Title from "./components/Title"
import Content from "./components/Content"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nowMenu: { menuId: 2, menuNm: "시스템공지관리", depth: 2, parMenuId: 1 },
      loginInfo: {
        userId: "siwan",
        userNm: "주영현",
      },
      menuList: [
        {
          menuId: 1,
          menuNm: "콜뷰티 APP 관리",
          depth: 1,
          childMenuItem: [
            { menuId: 2, menuNm: "시스템공지관리", depth: 2, parMenuId: 1 },
            { menuId: 3, menuNm: "FAQ관리", depth: 2, parMenuId: 1 },
            { menuId: 4, menuNm: "약관관리", depth: 2, parMenuId: 1 },
            { menuId: 5, menuNm: "APP버전관리", depth: 2, parMenuId: 1 },
          ],
        },
        {
          menuId: 6,
          menuNm: "매칭관리",
          depth: 1,
          childMenuItem: [
            { menuId: 7, menuNm: "매칭관리", depth: 2, parMenuId: 6 },
            { menuId: 8, menuNm: "매칭관리", depth: 2, parMenuId: 6 },
          ],
        },
      ],
    }
  }

  pageChangeFlag = false

  getMenuObj(menuId) {
    var menuList = this.state.menuList
    for (var i in menuList) {
      for (var j in menuList[i].childMenuItem) {
        if (Number(menuId) === menuList[i].childMenuItem[j].menuId) {
          return menuList[i].childMenuItem[j]
        }
      }
    }
  }

  render() {
    return (
      <div id="container" className="App">
        <Header loginInfo={this.state.loginInfo}></Header>
        <Nav
          menuList={this.state.menuList}
          nowMenu={this.state.nowMenu}
          onclickMenu={function (menuId) {
            var selectedMenu = this.getMenuObj(menuId)
            this.pageChangeFlag = true
            this.setState(Object.assign({}, this.state, { nowMenu: selectedMenu }))
          }.bind(this)}
        ></Nav>
        <Title menuInfo={this.state.nowMenu}></Title>
        <Content
          loginInfo={this.state.loginInfo}
          nowMenu={this.state.nowMenu}
          pageChangeFlag={this.pageChangeFlag}
        ></Content>
      </div>
    )
  }
}
