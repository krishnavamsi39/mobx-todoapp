import React, { Component } from "react";
import "./style.css";
import FilterTypes from "./../../../../constants/TodoConstants";
import { observer } from "mobx-react";
@observer
class TodoActions extends Component {
  handleClick = e => {
    this.props.toggleFooter(e.target.value);
  };
  clearCompleted = () => {
    this.props.todoStore.clearCompleted();
  };
  displayButtons = () => {
    let allclass = "action-button";
    let activeclass = "action-button";
    let completedclass = "action-button";
    if (this.props.footerAction === FilterTypes.all)
      allclass = "clicked-button";
    else if (this.props.footerAction === FilterTypes.active)
      activeclass = "clicked-button";
    else completedclass = "clicked-button";
    return (
      <div>
        <input
          type="button"
          className={allclass}
          value="All"
          onClick={this.handleClick}
        />
        <input
          type="button"
          className={activeclass}
          value="Active"
          onClick={this.handleClick}
        />
        <input
          type="button"
          className={completedclass}
          value="Completed"
          onClick={this.handleClick}
        />
      </div>
    );
  };
  displayItemCount = () => {
    const c = this.props.todoStore.itemCount;

    return <span className="item-count">{c} Items left</span>;
  };

  displayClearButton = () => {
    let c = 0;
    const todos = this.props.todoStore.todolist;

    todos.map(todo => {
      if (todo.isCompleted) c += 1;
    });
    if (c > 0)
      return (
        <div class="completed">
          <input
            type="button"
            className="action-button"
            value="Clear completed"
            onClick={this.clearCompleted}
          />
        </div>
      );
  };
  render() {
    return (
      <div className="footer">
        {this.displayItemCount()}
        {this.displayButtons()}
        {this.displayClearButton()}
      </div>
    );
  }
}
export default TodoActions;
