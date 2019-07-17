import React, { Component } from "react";
import "./style.css";
import EditableText from "./EditableText";
import { observer } from "mobx-react";
import { observable } from "mobx";
@observer
class EachTodoItem extends Component {
  @observable isEditable = false;
  handleEditable = () => {
    this.isEditable = !this.isEditable;
  };
  handleToggle = () => {
    this.props.todo.isTodoCompleted();
  };
  handleDelete = () => {
    this.props.todo.deleteTodo();
  };

  render() {
    return (
      <div className="eachdiv">
        <div className="checkandmessage">
          <label class="container">
            <input
              type="checkbox"
              className="check"
              checked={this.props.todo.isCompleted}
              onClick={this.handleToggle}
            />
            <span class="checkmark" />
          </label>
          <EditableText
            todo={this.props.todo}
            handleEditable={this.handleEditable}
            isEditable={this.isEditable}
          />
        </div>
        {!this.isEditable ? (
          <div className="imagediv">
            <img
              src="assets/index.png"
              height="20px"
              width="20px"
              onClick={this.handleDelete}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  }
}
export default EachTodoItem;
