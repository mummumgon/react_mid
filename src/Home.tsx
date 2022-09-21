import GlovalStyle from "./GlovalStyle";
import styled from "styled-components";
import {Link } from 'react-router-dom';
import { useState } from "react";
import HomeMenu from "./HomeMenu";
import {Helmet} from "react-helmet";

function Main() {
  const [view , setView] = useState(false);
  const onClick = () =>{setView((toggle) => !toggle)}
  return <div>
       <Helmet>
                <title>Home</title>
            </Helmet>
      <GlovalStyle/>
      <div className='container'>
            <h1 className='title dot'>= Home =</h1>
        <ul className="list_type">
          <li><Link to='/coins'>Coin<p>(api연동,react-query,ApexChart 적용)</p><em>&gt;</em></Link></li>
          <HomeMenu btnName='Join & ToDoList' menu1='Sign Up' link1='/join' mene2='ToDoList' link2='/todo' etc1='(hook-form,recoil,react-query,recoil-persist등 적용)'/>
          <HomeMenu btnName='Module' menu1='Input 교차 변화 (Recoil.Selector)' link1='/set' mene2='animation' link2='/ani' etc1='(recoil-selector 적용)' etc2='(framer-motion 적용)'/>
          {/* <li><Link to='/main'>넷플릭스<em>&gt;</em></Link></li> */}
          {/* <li><Link to='/todos'>Todo<em>&gt;</em></Link></li> */}
          {/* <li><Link to='/todos'>Drag N Drop<em>&gt;</em></Link></li> */}

        </ul>
    </div>
    </div>
}

export default Main;