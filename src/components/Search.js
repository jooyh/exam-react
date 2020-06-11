import React, { Component } from "react"

export default class Search extends Component {
  render() {
    return (
      <div className="table-area">
        <table className="tbl row-type searchSt">
          <colgroup>
            <col width="200px"></col>
            <col></col>
          </colgroup>
          <tbody>
            <tr>
              <th>등록일</th>
              <td>
                <div className="date-picker-box">
                  <input
                    type="text"
                    className="datepicker from hasDatepicker"
                    readOnly=""
                    id="dp1591863878947"
                  ></input>
                  <span className="hyphen">~</span>
                  <input
                    type="text"
                    className="datepicker to hasDatepicker"
                    readOnly=""
                    id="dp1591863878948"
                  ></input>
                </div>
                <div className="date-radio-box">
                  <button type="button" className="date-btn today" checked={true}>
                    오늘
                  </button>
                  <button type="button" className="date-btn oneWeek">
                    1주일
                  </button>
                  <button type="button" className="date-btn oneMonth">
                    한달
                  </button>
                  <button type="button" className="date-btn threeMonths">
                    3개월
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th>OS</th>
              <td>
                <div className="radio-box">
                  <span className="radio">
                    <input type="radio" id="notice-r01" name="notice-r"></input>
                    <label htmlFor="notice-r01">전체</label>
                  </span>
                  <span className="radio">
                    <input type="radio" id="notice-r02" name="notice-r"></input>
                    <label htmlFor="notice-r02">IOS</label>
                  </span>
                  <span className="radio">
                    <input type="radio" id="notice-r03" name="notice-r"></input>
                    <label htmlFor="notice-r03">Android</label>
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <th>검색어</th>
              <td>
                <input type="text"></input>
                <button type="button" className="btn btn-primary">
                  검색
                </button>
                <button type="button" className="btn btn-secondary">
                  초기화
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
