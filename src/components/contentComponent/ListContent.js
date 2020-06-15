import React, { Component } from "react"
import Search from "../Search"

export default class ListContent extends Component {
  render() {
    var data = this.props.data
    var totCnt = this.props.data ? this.props.data.length : 0
    var contents = []
    console.log("DATA", data)
    for (var i in data) {
      contents.push(
        <tr
          key={data[i].id}
          data-id={data[i].id}
          onClick={function (e) {
            this.props.listClick(e.target.parentNode.dataset.id)
            e.stopPropagation()
          }.bind(this)}
        >
          <td>{data[i].id}</td>
          <td>
            {data[i].frDate} ~ {data[i].toDate}
          </td>
          <td>{data[i].title}</td>
          <td>{data[i].os}</td>
          <td>{data[i].writer}</td>
          <td>{data[i].regDate}</td>
        </tr>
      )
    }
    if (!totCnt) {
      contents.push(
        <tr key={0}>
          <td colSpan={6}>데이터가 없습니다.</td>
        </tr>
      )
    }

    return (
      <div className="listContent">
        <Search
          onSearch={function (qeury) {
            this.props.onSearch(qeury)
          }.bind(this)}
        ></Search>
        <span className="tbl-total">
          전체 : <strong>121</strong> 건
        </span>
        <div className="table-area">
          <table className="tbl">
            <colgroup>
              <col width="70px;"></col>
              <col width="330px"></col>
              <col width="auto;"></col>
              <col width="120px"></col>
              <col width="120px"></col>
              <col width="120px"></col>
            </colgroup>
            <thead>
              <tr>
                <th>번호</th>
                <th>적용일시</th>
                <th>제목</th>
                <th>OS</th>
                <th>작성자</th>
                <th>등록일</th>
              </tr>
            </thead>
            <tbody>{contents}</tbody>
          </table>
        </div>
        <div className="btn-area">
          <button
            onClick={function () {
              this.props.regClick()
            }.bind(this)}
            type="button"
            className="btn btn-primary fr"
          >
            등록
          </button>
        </div>
      </div>
    )
  }
}
