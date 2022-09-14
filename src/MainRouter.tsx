import {  Routes, Route } from "react-router-dom";
import Home from "./Home";
import Coins from "./coin/Coins";
import CoinDetail from "./coin/CoinDetail";
import ToDoList from "./toDo/ToDoList";
import DragNDrop from "./dragDrop/DragNDrop";
import DragNDropDetail from "./dragDrop/DragNDropDetail";
import UserJoin from './toDo/UserJoin'
import JoinComlpete from './toDo/Complete'
import Selectors from "./setSelector/Selectors";
function MainRouter() {
  return ( 
  <Routes>
    <Route path="/react_mid" element={<Home/>}/>
    {/* COIN */}
    <Route path="/coins" element={<Coins/>}/>
    <Route path="/coins/:coinId/*" element={<CoinDetail/>}/>
    {/* TODO */}
    <Route path="/todo" element={<ToDoList/>}/>
    {/* Join */}
    <Route path="/join" element={<UserJoin/>}/>
    <Route path="/join/complete" element={<JoinComlpete/>}/>
    {/* Selectors */}
    <Route path="/set" element={<Selectors/>}/>
    {/* DragNDrop */}
    <Route path="/todos" element={<DragNDrop/>}/>
    <Route path="/ddrop/detail" element={<DragNDropDetail/>}/>
  </Routes>
  )
  
}

export default MainRouter;