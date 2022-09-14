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
    height: calc(100% - 8px);
  }
`;

interface IForm{
  newTodo:string,
  cate1:string
}

function ToDoCreat(){
  const {register, handleSubmit, formState:{errors}, reset} = useForm<IForm>();
  const [nToDo , setNToDo] = useRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const onSubmit = (data:IForm) => {
    setNToDo((oldToDo)=>[{id:Date.now(),text:data.newTodo,category:category,category1:data.cate1},...oldToDo]);
    reset();
  };
    return <>
      <h1 className="title">TODOLIST</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FindForm className="">
          <input type="text" {...register('cate1',{maxLength:{value:10,message:"카테고리 글자 수가 10글자 이상입니다."}})} placeholder="카테고리를 최대 10글자 이하로 적어주세요(선택)"/>
          <input type="text" {...register('newTodo',{required:'할 일을 적어주세요.'})} placeholder="할 일을 적어주세요(필수)"/>
          {errors.newTodo && <p>{errors.newTodo.message}</p>}
          <button>확인</button>
        </FindForm>
      </form>
        {errors.cate1 && errors.cate1.message}
    </>;
}
export default ToDoCreat;