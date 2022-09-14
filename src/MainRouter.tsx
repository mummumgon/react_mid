import {  Routes, Route } from "react-router-dom";
import Home from "./Home";
import Coins from "./coin/Coins";
import CoinDetail from "./coin/CoinDetail";
import ToDoList from "./toDo/ToDoList";
import DragNDrop from "./dragDrop/DragNDrop";
import DragNDropDetail from "./dragDrop/DragNDropDetail";
import UserJoin from './toDo/UserJoin'
import JoinComlpete from './toDo/Complete'
function MainRouter() {
  return ( 
  <Routes>
    <Route path="/react_mid" element={<Home/>}/>
    {/* COIN */}
    <Route path="/react_mid/coins" element={<Coins/>}/>
    <Route path="/react_mid/coins/:coinId/*" element={<CoinDetail/>}/>
    {/* TODO */}
    <Route path="/react_mid/todo" element={<ToDoList/>}/>
    {/* Join */}
    <Route path="/react_mid/join" element={<UserJoin/>}/>
    <Route path="/react_mid/join/complete" element={<JoinComlpete/>}/>
    {/* DragNDrop */}
    <Route path="/todos" element={<DragNDrop/>}/>
    <Route path="/ddrop/detail" element={<DragNDropDetail/>}/>
  </Routes>
  )
  
}

export default MainRouter;