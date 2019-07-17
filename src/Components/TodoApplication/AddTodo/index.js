import React, { Component } from "react";

class AddTodo extends Component {
  handleTodoText = e => {
    if (e.keyCode === 13 && e.target.value !== "") {
      console.log(1);
      this.props.todoStore.addTodo(e.target.value);
    }
  };

  render() {
    return (
      <>
        <input
          className={this.props.TextClass}
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
