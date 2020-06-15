import React, { Component } from "react"
import ListContent from "./contentComponent/ListContent"
import DetailContent from "./contentComponent/DetailContent"
import WriteContent from "./contentComponent/WriteContent"
export default class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageChangeFlag: props.pageChangeFlag,
      maxId: 4,
      nowMenu: props.nowMenu,
      contentType: "list",
      contentEl: null,
      nowContentId: null,
      query: "",
      contentData: [],
    }
  }

  getDataList = async function (query) {
    if (query === undefined) query = ""
    console.log("REQ", `/v1/search/shop.json?query=${query}`)
    fetch(`/v1/search/shop.json?query=${query}`, {
      method: "GET",
      headers: {
        "X-Naver-Client-Id": "AxD33VNlEAMOx9w9IPBv",
        "X-Naver-Client-Secret": "1qZgSs3d6l",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("API Call", response)
        this.setState(Object.assign({}, this.state, { contentData: response.items }))
      })
      .catch((error) => {
        console.log("API Call error:" + error)
      })
  }.bind(this)

  render() {
    if (this.state.contentType === "list") {
      this.state.contentEl = (
        <ListContent
          onSearch={function (_query) {
            this.setState(
              Object.assign({}, this.state, {
                query: _query,
              })
            )
          }.bind(this)}
          data={this.state.contentData}
          listClick={function (id) {
            var _state = Object.assign({}, this.state, {
              nowContentId: id,
              contentType: "detail",
            })
            this.setState(_state)
          }.bind(this)}
          regClick={function () {
            var _state = Object.assign({}, this.state, { contentType: "write" })
            this.setState(_state)
          }.bind(this)}
        ></ListContent>
      )
    } else if (this.state.contentType === "detail") {
      var detailData = null
      for (var i in this.state.contentData) {
        if (Number(this.state.contentData[i].id) === Number(this.state.nowContentId)) {
          detailData = this.state.contentData[i]
        }
      }

      this.state.contentEl = (
        <DetailContent
          contentType={this.state.contentType}
          data={detailData}
          listClick={function () {
            var _state = Object.assign({}, this.state, { contentType: "list" })
            this.setState(_state)
          }.bind(this)}
          modifyClick={function () {
            var _state = Object.assign({}, this.state, { contentType: "modify" })
            this.setState(_state)
          }.bind(this)}
        ></DetailContent>
      )
    } else if (this.state.contentType === "write") {
      this.state.contentEl = (
        <WriteContent
          contentType={this.state.contentType}
          loginInfo={this.props.loginInfo}
          maxId={this.state.maxId}
          regClick={function (regData) {
            var _contentData = this.state.contentData.concat()
            _contentData.push(regData)
            console.log("REG", _contentData)
            this.setState(
              Object.assign({}, this.state, {
                contentData: _contentData,
                contentType: "detail",
                nowContentId: regData.id,
                maxId: regData.id,
              })
            )
          }.bind(this)}
          cancelClick={function () {
            this.setState(Object.assign({}, this.state, { contentType: "list" }))
          }.bind(this)}
        ></WriteContent>
      )
    } else if (this.state.contentType === "modify") {
      var detailData
      for (var i in this.state.contentData) {
        if (Number(this.state.contentData[i].id) === Number(this.state.nowContentId)) {
          detailData = this.state.contentData[i]
        }
      }
      this.state.contentEl = (
        <WriteContent
          loginInfo={this.props.loginInfo}
          contentType={this.state.contentType}
          data={detailData}
          cancelClick={function () {
            this.setState(Object.assign({}, this.state, { contentType: "list" }))
          }.bind(this)}
          regClick={function (regData) {
            var _contentData = this.state.contentData.concat()
            for (var i in _contentData) {
              if (_contentData[i].id === regData.id) {
                _contentData[i] = regData
              }
            }
            this.setState(
              Object.assign({}, this.state, {
                contentData: _contentData,
                contentType: "detail",
                nowContentId: regData.id,
                maxId: regData.id,
              })
            )
          }.bind(this)}
        ></WriteContent>
      )
    }

    return <div id="contents">{this.state.contentEl}</div>
  }
}
