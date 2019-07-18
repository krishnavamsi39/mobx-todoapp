import React, { Component } from "react";
import AddTodo from "./AddTodo";
import DisplayTodo from "./DisplayTodo";
import { observer } from "mobx-react";
@observer
class TodoApplication extends Component {
  render() {
    return (
      <div class="todo">
        <AddTodo
          todoStore={this.props.todoStore}
          message={""}
          onPressEnter={this.props.todoStore.addTodo}
        />
        <DisplayTodo todoStore={this.props.todoStore} />
      </div>
    );
  }
}
export default TodoApplication;
