import React, { Component } from "react";
import "./style.css";
class AddTodo extends Component {
  handleTodoText = e => {
    if (e.keyCode === 13 && e.target.value !== "") {
      this.props.todoStore.addTodo(e.target.value);
      e.target.value = "";
    }
  };

  render() {
    return (
      <>
        <input
          className="enter-text"
          type="text"
          placeHolder="What needs to be done "
          onChange={this.handleOnchange}
          onKeyDown={this.handleTodoText}
        />
      </>
    );
  }
}
export default AddTodo;
