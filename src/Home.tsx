import GlovalStyle from "./GlovalStyle";
import styled from "styled-components";
import {Link } from 'react-router-dom';
import { useState } from "react";
import HomeMenu from "./HomeMenu";

function Main() {
  const [view , setView] = useState(false);
  const onClick = () =>{setView((toggle) => !toggle)}
  return <div>
      <GlovalStyle/>
      <div className='container'>
            <h1 className='title dot'>= Home =</h1>
        <ul className="list_type">
          <li><Link to='/coins'>Coin<em>&gt;</em></Link></li>
          <HomeMenu btnName='Join & ToDoList' menu1='Sign Up' link1='/join' mene2='ToDoList' link2='/todo'/>
          <HomeMenu btnName='Module' menu1='Input 교차 변화 (Recoil.Selector)' link1='/set' mene2='animation (framer-motion)' link2='/ani'/>
          {/* <li><Link to='/todos'>Todo<em>&gt;</em></Link></li> */}
          {/* <li><Link to='/todos'>Drag N Drop<em>&gt;</em></Link></li> */}

        </ul>
    </div>
    </div>
}

export default Main;