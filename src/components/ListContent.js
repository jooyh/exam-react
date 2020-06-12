import React, { Component } from "react"
import Search from "./Search"

export default class ListContent extends Component {
  render() {
    var data = this.props.data
    var totCnt = this.props.data.length
    var contents = []
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
        <tr>
          <td colspan={6}>데이터가 없습니다.</td>
        </tr>
      )
    }

    return (
      <div className="listContent">
        <Search></Search>
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
          <div className="paging-box">
            <a href="#" className="nav prev_02">
              처음목록
            </a>
            <a href="#" className="nav prev_01">
              이전목록
            </a>
            <a href="#" className="active">
              1
            </a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#" className="nav next_01">
              처음목록
            </a>
            <a href="#" className="nav next_02">
              이전목록
            </a>
          </div>
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
