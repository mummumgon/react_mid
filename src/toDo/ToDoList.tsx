// 작업일 : 2022.09.12 ~ 2022.09.13
// 작업내용: ToDoList 페이지 작업
// Library : Recoil,react-hook-form,styled-component

// 유저가 커스텀 카테고리를 생성할 수 있는 기능.
// localStorage를 사용하여, 새로고침을 했을 때 이전의 데이터가 유지되는 기능(persistance).

import { useRecoilState, useRecoilValue } from "recoil"
import styled from "styled-components";
import { Categorys, categoryState, todoSelector } from "../atom"
import ToDo from "./ToDo";
import ToDoCreat from "./ToDoCreat";
import ToDoHeader from "./ToDoHeader";

function ToDoList(){
  const selecToDo = useRecoilValue(todoSelector);
  console.log(selecToDo);
  const [cate , setCate] = useRecoilState(categoryState);
  const onInput = (e:React.FormEvent<HTMLSelectElement>) =>{
    const {value} = e.currentTarget;
    setCate(value as any);
  }
  return <div><ToDoHeader/>
    <div className='container'>
    <ToDoCreat/>
    <select value={cate} onInput={onInput}>
      <option value={Categorys.TODO}>{Categorys.TODO}</option>
      <option value={Categorys.DOING}>{Categorys.DOING}</option>
      <option value={Categorys.DONE}>{Categorys.DONE}</option>
    </select>
    <ul>
      {selecToDo?.map((todo)=><ToDo {...todo}/>)}
    </ul>
  </div>
  </div>
}

export default ToDoList;