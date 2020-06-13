import React, { Component } from "react"
import ListContent from "./ListContent"
import DetailContent from "./DetailContent"
import WriteContent from "./WriteContent"
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
      contentData: [
        {
          id: 1,
          frDate: "2020.05.20",
          toDate: "2020.09.05",
          title: "테스트1",
          os: "and",
          writer: "주영현",
          regDate: "2020.05.20",
          desc: `Call Beauty가 오픈 했습니다. 많은 이용바랍니다.
          첨부 1. Call Beauty SHOP관리자 App 이용방법
          첨부 2. Call Beauty App 이용방법`,
        },
        {
          id: 2,
          frDate: "2020.05.20",
          toDate: "2020.09.05",
          title: "테스트2",
          os: "all",
          writer: "주영현",
          regDate: "2020.05.20",
          desc: `Call Beauty가 오픈 했습니다. 많은 이용바랍니다.
          첨부 1. Call Beauty SHOP관리자 App 이용방법
          첨부 2. Call Beauty App 이용방법`,
        },
        {
          id: 3,
          frDate: "2020.05.20",
          toDate: "2020.09.05",
          title: "테스트3",
          os: "ios",
          writer: "주영현",
          regDate: "2020.05.20",
          desc: `Call Beauty가 오픈 했습니다. 많은 이용바랍니다.
          첨부 1. Call Beauty SHOP관리자 App 이용방법
          첨부 2. Call Beauty App 이용방법`,
        },
        {
          id: 4,
          frDate: "2020.05.20",
          toDate: "2020.09.05",
          title: "테스트4",
          os: "and",
          writer: "주영현",
          regDate: "2020.05.20",
          desc: `Call Beauty가 오픈 했습니다. 많은 이용바랍니다.
          첨부 1. Call Beauty SHOP관리자 App 이용방법
          첨부 2. Call Beauty App 이용방법`,
        },
      ],
    }
  }

  getData = function () {
    fetch("https://openapi.naver.com/v1/datalab/shopping/categories", {
      method: "POST",
      headers: {
        "X-Naver-Client-Id": "{AxD33VNlEAMOx9w9IPBv}",
        "X-Naver-Client-Secret": "{1qZgSs3d6l}",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        startDate: "2017-08-01",
        endDate: "2017-09-30",
        timeUnit: "month",
        category: [
          { name: "패션의류", param: ["50000000"] },
          { name: "화장품/미용", param: ["50000002"] },
        ],
        device: "pc",
        gender: "f",
        ages: ["20", "30"],
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log("API Call error:" + error)
      })
  }

  render() {
    this.getData()
    // if (this.state.pageChangeFlag) {
    //   this.setState(
    //     Object.assign({}, this.state, {
    //       pageChangeFlag: false,
    //       contentType: "list",
    //     })
    //   )
    // }
    if (this.state.contentType === "list") {
      this.state.contentEl = (
        <ListContent
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
