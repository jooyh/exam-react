import React, { Component } from "react"

export default class Radio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: props.data,
      default: props.default,
      name: props.name,
    }
  }
  render() {
    var radios = []
    var _data = this.state.data

    for (var i in _data) {
      radios.push(
        <span className="radio" key={i}>
          <input
            type="radio"
            id={"notice-r" + i}
            name={this.state.name}
            value={_data[i].key}
            defaultChecked={this.state.default === _data[i].value}
          ></input>
          <label htmlFor={"notice-r" + i}>{_data[i].name}</label>
        </span>
      )
    }

    return (
      <tr>
        <th>
          {this.state.name.toUpperCase()}
          <span className="required">*</span>
        </th>
        <td>
          <div className="radio-box">{radios}</div>
        </td>
      </tr>
    )
  }
}
