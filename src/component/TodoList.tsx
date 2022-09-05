import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import {categoryState, toDoSelector, toDoState} from '../atoms'
import CreateTodos from "./CreateToDos";
import ToDo from './ToDo';
interface IForm{
    toDo:string,
}

const Container = styled.div`
    max-width: 500px;
    margin: 100px auto;
    form{
        position: relative;
        input{
            width: 100%;
            line-height: 26px;
            padding: 5px 100px 5px 20px;
            +button{
            position: absolute;
            width: 80px;
            height: 100%;
            right: 0;
            }
        }
    }

`;
const Title = styled.h1`
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
`;
const ToDoUl = styled.ul`
`;


function ToDoList(){
    const toDos = useRecoilValue(toDoSelector);
   const [category, setCategory] = useRecoilState(categoryState);
   const onInput = (e:React.FormEvent<HTMLSelectElement>) =>{
    const {value} = e.currentTarget;
    setCategory(value);
   };
   console.log(category);
    return <Container><div>
        <Title>To Dos</Title>
        <CreateTodos/>
          <select value={category} onInput={onInput}>
            <option value="TO_DO">TO_DO</option>
            <option value="DOING">DOING</option>
            <option value="DONE">DONE</option>
          </select>
    </div>
    
    {toDos.map(todo => <ToDo key={todo.id} {...todo}/>)}
    </Container>
    
}

export default ToDoList;