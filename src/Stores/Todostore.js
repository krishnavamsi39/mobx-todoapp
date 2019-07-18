import { observable, computed } from "mobx";
import { action } from "mobx";
import Model from "../Models/Model";

class Todostore {
  id = 1;
  @observable todolist = [];
  @action
  addTodo(message) {
    this.todolist.push(new Model(this, this.id, message, false));
    this.id += 1;
  }
  @computed get itemCount() {
    let c = 0;

    this.todolist.map(todo => {
      if (!todo.isCompleted) c += 1;
    });
    return c;
  }
  clearCompleted() {
    this.todolist = this.todolist.filter(todo => !todo.isCompleted);
  }
}

export default Todostore;
