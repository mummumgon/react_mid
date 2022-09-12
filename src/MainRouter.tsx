import {  Routes, Route } from "react-router-dom";
import Home from "./Home";
import Coins from "./coin/Coins";
import CoinDetail from "./coin/CoinDetail";
import ToDoList from "./toDo/ToDoList";
import ToDoListDetail from "./toDo/ToDoDetail";
import DragNDrop from "./dragDrop/DragNDrop";
import DragNDropDetail from "./dragDrop/DragNDropDetail";
import UserJoin from './toDo/UserJoin'
import JoinComlpete from './toDo/Complete'
function MainRouter() {
  return ( 
  <Routes>
    <Route path="/reactmid" element={<Home/>}/>
    {/* COIN */}
    <Route path="/coins" element={<Coins/>}/>
    <Route path="/coins/:coinId/*" element={<CoinDetail/>}/>
    {/* TODO */}
    <Route path="/todos" element={<ToDoList/>}/>
    <Route path="/todos/detail" element={<ToDoListDetail/>}/>
    {/* Join */}
    <Route path="/join" element={<UserJoin/>}/>
    <Route path="/join/complete" element={<JoinComlpete/>}/>
    {/* DragNDrop */}
    <Route path="/todos" element={<DragNDrop/>}/>
    <Route path="/ddrop/detail" element={<DragNDropDetail/>}/>
  </Routes>
  )
  
}

export default MainRouter;