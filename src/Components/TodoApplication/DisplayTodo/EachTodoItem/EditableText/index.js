import React, { Component } from "react";

import { observer } from "mobx-react";
import "./style.css";
import { observable } from "mobx";
@observer
class EditableText extends Component {
  @observable todoText = "";
  handleClick = () => {
    this.props.handleEditable();
  };
  handleEdit = e => {
    if (e.keyCode === 13 && e.target.value !== "") {
      this.props.todo.editText(e.target.value);
      this.props.handleEditable();
    }
  };
  handleOnchange = e => {
    this.todoText = e.target.value;
  };
  renderMessage = () => {
    if (this.props.isEditable) {
      return (
        <input
          className="update-text"
          type="text"
          onKeyDown={this.handleEdit}
          onChange={this.handleOnchange}
        />
      );
    }
    return this.props.todo.isCompleted ? (
      <strike className="strikemessage">{this.props.todo.todoText} </strike>
    ) : (
      <span className="message" onDoubleClick={this.handleClick}>
        {" "}
        {this.props.todo.todoText}{" "}
      </span>
    );
  };
  render() {
    return this.renderMessage();
  }
}
export default EditableText;
