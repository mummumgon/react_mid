import styled from "styled-components";
import {Link } from 'react-router-dom';
import { useState } from "react";

interface IMenu{
    btnName?:string;
    menu1:string;
    mene2?:string;
    link1:string;
    link2?:string;
}
function HomeMenu({btnName,menu1,mene2,link1,link2}:IMenu){
    const [view , setView] = useState(false);
    const onClick = () =>{setView((toggle) => !toggle)}
    return (<li>
    <button onClick={onClick}>{btnName}<em>&gt;</em></button>
    { !view ? '' : 
    <div className="depth2">
      <Link to={link1}><em>└ {menu1}</em><em>&gt;</em></Link>
      <Link to={(link2 !== undefined) ? link2 : ''}><em>└ {mene2}</em><em>&gt;</em></Link>

    </div>
    }
  </li>)
}

export default HomeMenu;