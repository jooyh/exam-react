import React, { Component } from "react"

export default class DetailContent extends Component {
  render() {
    var _data = this.props.data
    var subTitle

    console.log("DetailContent", this.props)

    if (this.props.contentType === "detail") {
      subTitle = "상세보기"
    } else if (this.props.contentType === "write") {
      subTitle = "등록하기"
    } else if (this.props.contentType === "modify") {
      subTitle = "수정하기"
    }

    return (
      <div>
        <div className="table-area">
          <table className="tbl row-type">
            <colgroup>
              <col width="200px"></col>
              <col></col>
              <col width="200px"></col>
              <col></col>
            </colgroup>
            <tbody>
              <tr>
                <th>제목</th>
                <td colSpan="3">{_data.title}</td>
              </tr>
              <tr>
                <th>내용</th>
                <td colSpan="3">{_data.desc}</td>
              </tr>
              <tr>
                <th>적용일자</th>
                <td colSpan="3">
                  {_data.frDate} ~ {_data.toDate}
                </td>
              </tr>
              <tr>
                <th>OS</th>
                <td>{_data.os}</td>
                <th>작성자</th>
                <td>
                  {_data.writer} / {_data.regDate}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="btn-area">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={function () {
              this.props.listClick()
            }.bind(this)}
          >
            목록
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={function () {
              this.props.modifyClick()
            }.bind(this)}
          >
            수정
          </button>
        </div>
      </div>
    )
  }
}
