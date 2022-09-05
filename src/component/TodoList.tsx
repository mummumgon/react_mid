import { useRecoilValue } from "recoil";
import styled from "styled-components";
import {toDoSelector, toDoState} from '../atoms'
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
   const toDos = useRecoilValue(toDoState);
   const [todo,doing,done] = useRecoilValue(toDoSelector);
    return <Container><div>
        <Title>To Dos</Title>
        <CreateTodos/>
            <hr/>
            <h2>TODO</h2>
            <hr/>
            <ToDoUl>
            {/* toDo가 같은 (interface ITodo)타입을 사용하기에 가능한 문법 <ToDo {...toDo}/> 다르면 안됨!*/}
            {/* 분할할때 키값은 부모페이지에서 줌! */}
            {todo.map((toDo)=><ToDo key={toDo.id} {...toDo}/>)} 
            </ToDoUl>
            <hr/>
            <h2>DOING</h2>
            <hr/>
            <ToDoUl>
            {doing.map((toDo)=><ToDo key={toDo.id} {...toDo}/>)} 
            </ToDoUl>
            <hr/>
            <h2>DONE</h2>
            <hr/>
            <ToDoUl>
            {done.map((toDo)=><ToDo key={toDo.id} {...toDo}/>)} 
            </ToDoUl>
    </div>
    </Container>
}

export default ToDoList;