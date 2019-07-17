import React, { Component } from "react";

import { observer } from "mobx-react";
import "./style.css";
@observer
class EditableText extends Component {
  handleClick = () => {
    this.props.handleEditable();
  };
  handleEdit = e => {
    if (e.keyCode === 13 && e.target.value !== "") {
      this.props.todo.editText(e.target.value);
      this.props.handleEditable();
    }
  };

  renderMessage = () => {
    if (this.props.isEditable) {
      return (
        <input
          className="update-text"
          type="text"
          onKeyDown={this.handleEdit}
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
