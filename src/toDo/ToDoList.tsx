// 작업일 : 2022.09.12 ~ 2022.09.13
// 작업내용: ToDoList 페이지 작업
// Library : Recoil,react-hook-form,styled-component,recoil-persist
// 기능적용: 
// 유저가 커스텀 카테고리를 생성(기본 카테고리값 해당 selectr값이 입력됨)
// localStorage 연결
// ToDo 삭제기능 

import { useRecoilState, useRecoilValue } from "recoil"
import styled from "styled-components";
import { Categorys, categoryState, todoSelector } from "../atom"
import ToDo from "./ToDo";
import ToDoCreat from "./ToDoCreat";
import ToDoHeader from "./ToDoHeader";

const SelectBox = styled.div`
  text-align: right;
  margin: 30px 0 0;
  border-top: 6px double ${props => props.theme.coinColor.textColor} ;
`;

function ToDoList(){
  const selecToDo = useRecoilValue(todoSelector);
  console.log('selecToDo',selecToDo);
  const [cate , setCate] = useRecoilState(categoryState);
  const onInput = (e:React.FormEvent<HTMLSelectElement>) =>{
    const {value} = e.currentTarget;
    setCate(value as any);
  }
  return <div><ToDoHeader/>
    <div className='container'>
    <ToDoCreat/>
    <SelectBox>
      <select value={cate} onInput={onInput}>
        <option value={Categorys.TODO}>{Categorys.TODO}</option>
        <option value={Categorys.DOING}>{Categorys.DOING}</option>
        <option value={Categorys.DONE}>{Categorys.DONE}</option>
      </select>
    </SelectBox>
    <ul>
      {selecToDo?.map((todo)=><ToDo {...todo}/>)}
    </ul>
  </div>
  </div>
}

export default ToDoList;