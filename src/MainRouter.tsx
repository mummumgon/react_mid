import {  Routes, Route } from "react-router-dom";
import Home from "./Home";
import Coins from "./coin/Coins";
import CoinDetail from "./coin/CoinDetail";
import ToDoList from "./toDo/ToDoList";
import ToDoListDetail from "./toDo/ToDoDetail";
import DragNDrop from "./dragDrop/DragNDrop";
import DragNDropDetail from "./dragDrop/DragNDropDetail";
function MainRouter() {
  return ( 
  <Routes>
      {/* 코인 */}
      <Route path='/' element={<Home/>}/>
      <Route path='/coins' element={<Coins/>}/>
      <Route path='/coins/:coinId' element={<CoinDetail/>}/>
      {/* ToDO */}
      <Route path='/todos' element={<ToDoList/>}/>
      <Route path='/todos/detail' element={<ToDoListDetail/>}/>
      {/* Drag N Drop */}
      <Route path='/dragdrop/*' element={<DragNDrop/>}/>
      <Route path='/dragdrop/detail' element={<DragNDropDetail/>}/>
  </Routes>
  )
  
}

export default MainRouter;