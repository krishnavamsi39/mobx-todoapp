import { observable } from "mobx";
import { action } from "mobx";
import Model from "../Models/Model";

class Todostore {
  id = 0;
  @observable todolist = [];
  @action
  addTodo(message) {
    this.id += 1;
    this.todolist.push(new Model(this, this.id, message, false));
  }
}

export default Todostore;
