import React, { Component } from "react";
import "./style.css";
import { observer } from "mobx-react";
@observer
class EachTodoItem extends Component {
  handleToggle = () => {
    this.props.todo.isTodoCompleted();
  };
  handleDelete = () => {
    this.props.todoStore.deleteTodo(this.props.todo.id);
  };
  handleMessage = () => {
    if (!this.props.todo.isCompleted) {
      return <span>{this.props.todo.todoText} </span>;
    }
    return <strike>{this.props.todo.todoText} </strike>;
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
            {this.handleMessage()}
          </label>
        </div>
        <div className="imagediv">
          <img
            src="assets/index.png"
            height="20px"
            width="20px"
            onClick={this.handleDelete}
          />
        </div>
      </div>
    );
  }
}
export default EachTodoItem;
