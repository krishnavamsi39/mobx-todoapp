import React, { Component } from "react";
import { observer } from "mobx-react";
import EachTodoItem from "./EachTodoItem";
@observer
class DisplayTodo extends Component {
  displayEachTodo = () => {
    let filteredList = this.props.todoStore.todolist;
    const rows = filteredList.map(todo => {
      return <EachTodoItem todo={todo} />;
    });

    return rows;
  };
  render() {
    return <>{this.displayEachTodo()}</>;
  }
}
export default DisplayTodo;
