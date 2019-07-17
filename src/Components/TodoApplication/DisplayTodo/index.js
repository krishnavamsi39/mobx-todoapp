import React, { Component } from "react";
import { observer } from "mobx-react";
import EachTodoItem from "./EachTodoItem";
import { observable } from "mobx";
import FilterTypes from "./../../../constants/TodoConstants";
import TodoActions from "./TodoActions";
@observer
class DisplayTodo extends Component {
  @observable footerAction = FilterTypes.all;
  toggleFooter = action => {
    this.footerAction = action;
  };
  displayEachTodo = () => {
    let filteredList = [];
    if (this.footerAction === FilterTypes.active) {
      filteredList = this.props.todoStore.todolist.filter(
        todo => todo.isCompleted === false
      );
    } else if (this.footerAction === FilterTypes.completed) {
      filteredList = this.props.todoStore.todolist.filter(
        todo => todo.isCompleted === true
      );
    } else {
      filteredList = this.props.todoStore.todolist;
    }
    const rows = filteredList.map(todo => {
      return <EachTodoItem todo={todo} todoStore={this.props.todoStore} />;
    });

    return rows;
  };
  render() {
    return (
      <>
        {this.displayEachTodo()}
        {this.props.todoStore.todolist.length > 0 ? (
          <TodoActions
            footerAction={this.footerAction}
            toggleFooter={this.toggleFooter}
            todoStore={this.props.todoStore}
          />
        ) : (
          <></>
        )}
      </>
    );
  }
}
export default DisplayTodo;
