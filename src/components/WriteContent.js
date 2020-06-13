import React, { Component } from "react"
import DatePicker from "react-datepicker"
import Radio from "./inputComponents/Radio"
import "react-datepicker/dist/react-datepicker.css"

export default class WriteContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      frDate: props.data ? new Date(this.props.data.frDate) : new Date(),
      toDate: props.data ? new Date(this.props.data.toDate) : new Date(),
      frMaxDate: null,
      toMaxDate: null,
      data: props.data,
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

  handlerChangeForInput = (e) => {
    var _data = Object.assign({}, this.state.data)
    _data[e.target.name] = e.target.value
    this.setState(Object.assign({}, this.state, { data: _data }))
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
                    value={this.state.data ? this.state.data.title : ""}
                    onChange={this.handlerChangeForInput}
                  ></input>
                </td>
              </tr>
              <tr>
                <th>
                  내용<span className="required">*</span>
                </th>
                <td>
                  <textarea
                    className="editor-area"
                    name="desc"
                    onChange={this.handlerChangeForInput}
                    value={this.state.data ? this.state.data.desc : ""}
                  ></textarea>
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
