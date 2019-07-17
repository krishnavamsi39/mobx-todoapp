import { observable } from "mobx";
import { action } from "mobx";
import Model from "../Models/Model";

class Todostore {
  id = 0;
  @observable todolist = [];
  @action
  addTodo(message) {
    this.id += 1;
    this.todolist.push(new Model(this.id, message, false));
  }
  deleteTodo(id) {
    this.todolist = this.todolist.filter(obj => obj.id !== id);
  }
}
export default Todostore;
