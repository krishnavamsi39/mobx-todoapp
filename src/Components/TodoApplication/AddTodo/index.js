import React, { Component } from "react";
import { observable } from "mobx";
import "./style.css";
import { observer } from "mobx-react";
@observer
class AddTodo extends Component {
  @observable inputText = this.props.message;
  handleTodoText = e => {
    if (e.keyCode === 13 && e.target.value !== "") {
      this.props.todoStore.addTodo(this.inputText);
      e.target.value = "";
    }
  };
  handleOnchange = e => {
    this.inputText = e.target.value;
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
