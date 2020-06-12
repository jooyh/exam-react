import React, { Component } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      frDate: new Date(),
      toDate: new Date(),
      frMaxDate: new Date(),
      toMaxDate: new Date(),
    }
  }

  handleChangeForFromDate = (date) => {
    this.setState(
      Object.assign({}, this.state, {
        frDate: date,
      })
    )
  }
  handleChangeForToDate = (date) => {
    this.setState(
      Object.assign({}, this.state, {
        toDate: date,
        frMaxDate: date,
        frDate: this.state.frDate > date ? date : this.state.frDate,
      })
    )
  }

  render() {
    return (
      <div
        className="table-area"
        onLoad={function () {
          document.querySelectorAll(".datepicker")
        }}
      >
        <form
          onSubmit={function (e) {
            console.log(e.target)
          }}
        >
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
                    <DatePicker
                      selected={this.state.frDate}
                      onChange={this.handleChangeForFromDate}
                      dateFormat="yyyy-MM-dd"
                      maxDate={this.state.frMaxDate}
                    ></DatePicker>
                    <span className="hyphen">~</span>
                    <DatePicker
                      selected={this.state.toDate}
                      onChange={this.handleChangeForToDate}
                      dateFormat="yyyy-MM-dd"
                      maxDate={this.state.toMaxDate}
                    ></DatePicker>
                  </div>
                  <div className="date-radio-box">
                    <button type="button" className="date-btn today">
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
                      <input
                        type="radio"
                        id="notice-r01"
                        name="notice-r"
                        defaultChecked={true}
                      ></input>
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
                  <button type="submit" className="btn btn-primary">
                    검색
                  </button>
                  <button type="button" className="btn btn-secondary" onClick={function () {}}>
                    초기화
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    )
  }
}
