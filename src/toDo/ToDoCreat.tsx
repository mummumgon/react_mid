import { useForm } from "react-hook-form";
import { categoryState, toDoState } from "../atom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";

const FindForm = styled.div`
  position: relative;
  input{
    padding: 6px 120px 6px 10px;
    height: 40px;
  }
  button{
    position: absolute;
    right: 0;
    top: 4px;
    width: 100px;
    height: 42px;
  }
`;

interface IForm{
  newTodo:string,
}

function ToDoCreat(){
  const {register, handleSubmit, formState:{errors}} = useForm<IForm>();
  const [nToDo , setNToDo] = useRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const onSubmit = ({newTodo}:IForm) => {
    setNToDo((oldToDo)=>[{id:Date.now(),text:newTodo,category:category},...oldToDo])
  };
    return <>
      <h1 className="title">TODOLIST</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FindForm className="">
          <input type="text" {...register('newTodo',{required:'할 일을 적어주세요.'})} placeholder="ToDoList"/>
          {errors.newTodo && <p>{errors.newTodo.message}</p>}
          <button>확인</button>
        </FindForm>
      </form>
    </>;
}
export default ToDoCreat;