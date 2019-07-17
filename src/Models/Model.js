import { observable } from "mobx";

export default class Model {
  store;
  id;
  @observable todoText;
  @observable isCompleted;

  constructor(store, id, message, completed) {
    this.store = store;
    this.id = id;
    this.todoText = message;
    this.isCompleted = completed;
  }
  isTodoCompleted() {
    this.isCompleted = !this.isCompleted;
  }
  editText(message) {
    this.todoText = message;
  }
  deleteTodo() {
    this.store.todolist.remove(this);
  }
}
