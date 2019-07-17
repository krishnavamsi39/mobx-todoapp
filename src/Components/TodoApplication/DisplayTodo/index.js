import React, { Component } from "react";

class DisplayTodo extends Component {
  displayEachTodo = () => {
    console.log(this.props.todoStore.todolist);
  };
  render() {
    return <>{this.displayEachTodo()}</>;
  }
}
export default DisplayTodo;
