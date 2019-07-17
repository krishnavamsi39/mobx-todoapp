import { observable } from "mobx";

export default class Model {
  id;
  @observable todoText;
  @observable isCompleted;

  constructor(id, title, completed) {
    this.id = id;
    this.todoText = title;
    this.isCompleted = completed;
  }
}
