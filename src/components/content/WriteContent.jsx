import React, { Component } from "react"
import Radio from "../input/Radio"
import Input from "../input/Input"
import TextArea from "../input/TextArea"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

export default class WriteContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
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

  render() {
    var data = this.props.data
    return (
      <form
        action="/updateProc"
        onSubmit={function (e) {
          e.preventDefault()
          var _data = {
            id: this.props.data.id,
            title: e.target.title.value,
            desc: e.target.desc.value,
            frDate: e.target.frDate.value,
            toDate: e.target.toDate.value,
            os: e.target.os.value,
          }
          this.props.submit(_data)
        }.bind(this)}
      >
        <div className="table-area">
          <table className="tbl row-type">
            <colgroup>
              <col width="200px"></col>
              <col></col>
            </colgroup>
            <tbody>
              <Input
                title="제목"
                data={[{ type: "text", name: "title", value: data ? data.title : "" }]}
              ></Input>
              <TextArea title="내용" name="desc" value={data ? data.desc : ""}></TextArea>
              <Radio
                data={[
                  { name: "전체", value: "all", key: "all" },
                  { name: "Android", value: "and", key: "Android" },
                  { name: "IOS", value: "ios", key: "IOS" },
                ]}
                default={data ? data.os : "all"}
                name={"os"}
              ></Radio>
              <tr>
                <th>적용기간</th>
                <td>
                  <DatePicker
                    name="frDate"
                    selected={new Date(this.state.data.frDate)}
                    onChange={this.handleChangeForFromDate}
                    dateFormat="yyyy.MM.dd"
                    maxDate={this.state.frMaxDate}
                  ></DatePicker>
                  <span className="hyphen">~</span>
                  <DatePicker
                    name="toDate"
                    selected={new Date(this.state.data.toDate)}
                    onChange={this.handleChangeForToDate}
                    dateFormat="yyyy.MM.dd"
                    maxDate={this.state.toMaxDate}
                  ></DatePicker>
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
              this.props.concel()
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
