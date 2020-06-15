import React, { Component } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import Radio from "./inputComponents/Radio"

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
      <div className="table-area">
        <form
          onSubmit={function (e) {
            e.preventDefault()
            this.props.onSearch(e.target.qeruy.value)
          }.bind(this)}
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
              <Radio
                data={[
                  { name: "전체", value: "all", key: "all" },
                  { name: "Android", value: "and", key: "Android" },
                  { name: "IOS", value: "ios", key: "IOS" },
                ]}
                default={this.state.data ? this.state.data.os : "all"}
                name={"os"}
              ></Radio>
              <tr>
                <th>검색어</th>
                <td>
                  <input type="text" name="qeruy"></input>
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
