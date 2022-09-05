import React,{useState} from "react";
import GlovalStyle from './GlovalStyle'
import ToDoList from "./component/TodoList";
function App() {
  return (
    <>
      <ToDoList/>
      <GlovalStyle/>
    </>
  );
}

export default App;