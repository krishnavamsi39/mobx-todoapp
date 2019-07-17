import { observable } from "mobx";
import { action } from "mobx";

class Todostore {
  @observable todolist = [];
  @action
  addTodo(message) {
    let obj = {
      todoText: message,

      toggleOnCompleted: false
    };

    this.todolist.push(obj);
    console.log(this.todolist);
  }
}
export default Todostore;
