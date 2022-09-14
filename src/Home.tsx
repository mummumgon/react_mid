import GlovalStyle from "./GlovalStyle";
import styled from "styled-components";
import {Link } from 'react-router-dom';
import { useState } from "react";

function Main() {
  const [view , setView] = useState(false);
  const onClick = () =>{setView((toggle) => !toggle)}
  return <div>
      <GlovalStyle/>
      <div className='container'>
            <h1 className='title dot'>= Home(교육 진행중) =</h1>
        <ul className="list_type">
          <li><Link to='/coins'>Coin<em>&gt;</em></Link></li>
          <li>
            <button onClick={onClick}>Join & ToDoList<em>&gt;</em></button>
            { !view ? '' : 
            <div className="depth2">
              <Link to="/join"><em>└ Sign Up</em><em>&gt;</em></Link>
              <Link to="/todo"><em>└ ToDoList</em><em>&gt;</em></Link>
            </div>
            }
          </li>
          <li>
            {/* <Link to='/set'>Input 교차 값전달<em>&gt;</em></Link> */}
          </li>
          {/* <li><Link to='/todos'>Todo<em>&gt;</em></Link></li> */}
          {/* <li><Link to='/todos'>Drag N Drop<em>&gt;</em></Link></li> */}

        </ul>
    </div>
    </div>
}

export default Main;