import React, { Component } from "react"

export default class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.name,
      value: props.value,
      title: props.title,
    }
  }

  onChangeHandler = function (e) {
    this.setState({ value: e.target.value })
  }.bind(this)

  render() {
    return (
      <tr>
        <th>{this.state.title}</th>
        <td>
          <textarea
            name={this.state.name}
            value={this.state.value}
            onChange={this.onChangeHandler}
          ></textarea>
        </td>
      </tr>
    )
  }
}
