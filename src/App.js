import React, { Component } from "react"
import Header from "./components/Header"
import Nav from "./components/Nav"
import Title from "./components/Title"
import Content from "./components/Content"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nowMenu: { menuId: 2, menuNm: "시스템공지관리", depth: 2 },
      loginInfo: {
        userId: "siwan",
        userNm: "주영현",
      },
      menuList: [
        { menuId: 1, menuNm: "콜뷰티 APP 관리", depth: 1 },
        { menuId: 2, menuNm: "시스템공지관리", depth: 2 },
      ],
    }
  }
  render() {
    return (
      <div id="container" className="App">
        <Header loginInfo={this.state.loginInfo}></Header>
        <Nav
          menuList={this.state.menuList}
          onchange={function (menuId) {
            console.log(menuId)
          }}
        ></Nav>
        <Title></Title>
        <Content></Content>
      </div>
    )
  }
}
