import React, { Component } from "react"

export default class ListContent extends Component {
  render() {
    var header = []
    var list = []

    for (var i in this.props.dataHeader) {
      header.push(<th key={"header" + i}> {this.props.dataHeader[i]}</th>)
    }

    for (var i in this.props.data) {
      var data = this.props.data[i]
      list.push(
        <tr key={"list" + i}>
          <td>{data.id}</td>
          <td>
            {data.frDate} ~ {data.toDate}
          </td>
          <td>
            <a
              href="/goDetail"
              data-id={data.id}
              onClick={function (e) {
                e.preventDefault()
                for (var i in this.props.data) {
                  var item = this.props.data[i]
                  if (Number(e.target.dataset.id) === item.id) {
                    this.props.goDetail(item)
                  }
                }
              }.bind(this)}
            >
              {data.title}
            </a>
          </td>
          <td>{data.os}</td>
          <td>{data.regDate}</td>
        </tr>
      )
    }

    return (
      <div className="listContent">
        <span className="tbl-total">
          전체 : <strong>{this.props.data.length}</strong>건
        </span>
        <div className="table-area">
          <table className="tbl">
            <colgroup>
              <col width="70px;"></col>
              <col width="330px"></col>
              <col width="auto;"></col>
              <col width="120px"></col>
              <col width="120px"></col>
            </colgroup>
            <thead>
              <tr>{header}</tr>
            </thead>
            <tbody>{list}</tbody>
          </table>
        </div>
      </div>
    )
  }
}
