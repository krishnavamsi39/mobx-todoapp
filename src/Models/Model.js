import { observable } from "mobx";

export default class Model {
  id;
  @observable todoText;
  @observable isCompleted;

  constructor(id, message, completed) {
    this.id = id;
    this.todoText = message;
    this.isCompleted = completed;
  }
  isTodoCompleted() {
    this.completed = !this.completed;
  }
}
