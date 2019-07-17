import React from "react";

import "./App.css";
import TodoApplication from "./Components/TodoApplication";
import Todostore from "./Stores/Todostore";
var todoStore = new Todostore();

function App() {
  return (
    <div className="App">
      <TodoApplication todoStore={todoStore} />
    </div>
  );
}

export default App;
