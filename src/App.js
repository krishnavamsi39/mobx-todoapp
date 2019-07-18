import React from "react";

import "./App.css";
import TodoApplication from "./Components/TodoApplication";
import Todostore from "./Stores/Todostore";
var todoStore = new Todostore();

function App() {
  return (
    <div className="App">
      <span class="heading">todos</span>
      <TodoApplication todoStore={todoStore} />
    </div>
  );
}

export default App;
