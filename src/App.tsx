import React,{useState} from "react";
import { useRecoilState , useRecoilValue } from "recoil";
import { minutes ,hourSelec} from "./atoms";
import GlovalStyle from './GlovalStyle'
function App() {
  const [minuts , setMinuts] = useRecoilState(minutes);
  const [houre , setHoure] = useRecoilState(hourSelec);
  const onMChange =(e:React.FormEvent<HTMLInputElement>)=>{
    const {value} = e.currentTarget;
    setMinuts(+value);
  };
  const onHChange =(e:React.FormEvent<HTMLInputElement>)=>{
    const {value} = e.currentTarget;
    setHoure(+value);
  };
  return (
    <div>
      <input value={minuts} onChange={onMChange} type="number"  placeholder="minutes..."/>
      <input value={houre} onChange={onHChange} type="number" placeholder="hours..."/>
    </div>
  );
}

export default App;