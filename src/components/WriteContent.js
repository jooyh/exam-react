import React, { Component } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

export default class WriteContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      frDate: props.data ? new Date(this.props.data.frDate) : new Date(),
      toDate: props.data ? new Date(this.props.data.toDate) : new Date(),
      frMaxDate: null,
      toMaxDate: null,
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
      <form
        onSubmit={function (e) {
          e.preventDefault()
          var regData = {
            id: this.props.data ? this.props.data.id : this.props.maxId + 1,
            title: e.target.title.value,
            desc: e.target.desc.value,
            os: e.target.os.value,
            frDate: e.target.frDate.value,
            toDate: e.target.toDate.value,
            writer: this.props.loginInfo.userNm,
            regDate:
              new Date().getFullYear() +
              "-" +
              (new Date().getMonth() + 1) +
              "-" +
              new Date().getDate(),
          }
          this.props.regClick(regData)
        }.bind(this)}
      >
        <div className="table-area">
          <table className="tbl row-type">
            <colgroup>
              <col width="200px"></col>
              <col></col>
            </colgroup>
            <tbody>
              <tr>
                <th>
                  제목<span className="required">*</span>
                </th>
                <td>
                  <input
                    type="text"
                    name="title"
                    className="w-full"
                    value={this.props.data ? this.props.data.title : ""}
                  ></input>
                </td>
              </tr>
              <tr>
                <th>
                  내용<span className="required">*</span>
                </th>
                <td>
                  <textarea className="editor-area" name="desc">
                    {this.props.data ? this.props.data.desc : ""}
                  </textarea>
                </td>
              </tr>
              <tr>
                <th>
                  OS<span className="required">*</span>
                </th>
                <td>
                  <div className="radio-box">
                    <span className="radio">
                      <input
                        type="radio"
                        id="notice-r01"
                        name="os"
                        value="ALL"
                        defaultChecked={true}
                      ></input>
                      <label htmlFor="notice-r01">전체</label>
                    </span>
                    <span className="radio">
                      <input type="radio" id="notice-r02" name="os" value="IOS"></input>
                      <label htmlFor="notice-r02">IOS</label>
                    </span>
                    <span className="radio">
                      <input type="radio" id="notice-r03" name="os" value="Android"></input>
                      <label htmlFor="notice-r03">Android</label>
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <th>
                  적용일자<span className="required">*</span>
                </th>
                <td>
                  <div className="date-picker-box">
                    <DatePicker
                      name="frDate"
                      selected={this.state.frDate}
                      onChange={this.handleChangeForFromDate}
                      dateFormat="yyyy-MM-dd"
                      maxDate={this.state.frMaxDate}
                    ></DatePicker>
                    <span className="hyphen">~</span>
                    <DatePicker
                      name="toDate"
                      selected={this.state.toDate}
                      onChange={this.handleChangeForToDate}
                      dateFormat="yyyy-MM-dd"
                      maxDate={this.state.toMaxDate}
                    ></DatePicker>
                  </div>
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
              this.props.cancelClick()
            }.bind(this)}
          >
            취소
          </button>
          <button type="submit" className="btn btn-primary">
            등록
          </button>
        </div>
      </form>
    )
  }
}
