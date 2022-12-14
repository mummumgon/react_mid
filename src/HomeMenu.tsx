import styled from "styled-components";
import {Link } from 'react-router-dom';
import { useState } from "react";

interface IMenu{
    btnName?:string;
    menu1:string;
    mene2?:string;
    link1:string;
    link2?:string;
    etc1:string;
    etc2?:string;
}
function HomeMenu({btnName,menu1,mene2,link1,link2,etc1,etc2}:IMenu){
    const [view , setView] = useState(false);
    const onClick = () =>{setView((toggle) => !toggle)}
    return (<li>
    <button onClick={onClick}>{btnName}<em>&gt;</em></button>
    { !view ? '' : 
    <div className="depth2">
      <Link to={link1}><p>{etc1}</p><em>└ {menu1}</em><em>&gt;</em></Link>
      <Link to={(link2 !== undefined) ? link2 : ''}><p>{etc2}</p><em>└ {mene2}</em><em>&gt;</em></Link>

    </div>
    }
  </li>)
}

export default HomeMenu;