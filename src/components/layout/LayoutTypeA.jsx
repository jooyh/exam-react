import React, { Component } from "react"
import Header from "../../containers/Header"
import Nav from "../../containers/Nav"
import Title from "../../containers/Title"
import Content from "../../containers/Content"

export default class LayoutTypeA extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Nav></Nav>
        <Title></Title>
        <Content></Content>
      </div>
    )
  }
}
