import React, { Component } from "react"

export default class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: props.title,
      data: props.data,
    }
  }

  onChangeHandler = function (e) {
    console.log("TEST", e.target.dataset.idx)
    var _data = this.state.data.concat()
    _data[e.target.dataset.idx].value = e.target.value
    this.setState({ data: _data })
  }.bind(this)

  render() {
    var inputList = []

    for (var i in this.state.data) {
      var inputData = this.state.data[i]
      inputList.push(
        <input
          key={"input" + i}
          data-idx={i}
          type={inputData.type}
          name={inputData.name}
          value={inputData.value}
          onChange={this.onChangeHandler}
        ></input>
      )
    }
    return (
      <tr>
        <th>{this.state.title}</th>
        <td>{inputList}</td>
      </tr>
    )
  }
}
