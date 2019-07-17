import React, { Component } from "react";
import "./style.css";
import { observer } from "mobx-react";
@observer
class EachTodoItem extends Component {
  render() {
    return (
      <div className="eachdiv">
        <div className="checkandmessage">
          <label class="container">
            <input
              type="checkbox"
              className="check"
              checked={this.props.todo.todoCompleted}
              onClick={this.handleToggle}
            />
            <span class="checkmark" />
            <span>{this.props.todo.todoText} </span>
          </label>
        </div>
      </div>
    );
  }
}
export default EachTodoItem;
