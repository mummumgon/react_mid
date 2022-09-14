import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { Categorys, IToDo, toDoState } from "../atom";
import { useState } from "react";
import { useForm } from "react-hook-form";
const LI = styled.li`
    padding: 20px;
    word-break: break-all;
    border: 2px solid ${props=>props.theme.coinColor.textColor};
    border-radius: 10px;
    margin: 30px 0;
    :first-child{margin-top:0}
    p{padding-bottom:10px; margin-bottom:10px}
    .cate{
        border-bottom: 1px solid ${props=>props.theme.coinColor.textColor};
        font-size:14px;
        padding: 0 0 10px;
        color:orange
    }
    >div{
        text-align: right;
        button{
            width: 80px;
            height: 30px;
        }
    }
`;
const InBtn = styled.p`
    position: relative;
    input{
        padding: 2px 70px 2px 10px
    }
    button{
        position: absolute;
        right: -2px;
        top: 50%;
        transform: translateY(-70%);
        height: 40px;
        width: 50px;
        background-color: ${props=>props.theme.coinColor.bgColor};
        color: ${props=>props.theme.coinColor.textColor};
        border: 0;
    }
`;
function ToDo({text,id,category,category1}:IToDo){
    const REMOVE = 'REMOVE';
    const MODIFY = 'MODIFY';
    const SAVE = 'SAVE';
    const [modify , setModify] = useState(false);
    const setToDo = useSetRecoilState(toDoState);
    const onClick = (e:React.MouseEvent<HTMLButtonElement>) =>{
        const {name} = e.currentTarget;
        setToDo((oldToDo)=>{
            const idx = oldToDo.findIndex((todo)=> todo.id === id);
            const newToDo = {id,text,category:name as Categorys,category1};
          if(name === REMOVE){
              return [...oldToDo.slice(0,idx) ,...oldToDo.slice(idx+1)];
            }else{
              return [...oldToDo.slice(0,idx), newToDo ,...oldToDo.slice(idx+1)];
            }
        });
    }
    const [inputs, setInputs] = useState({
        changCate: '',
        changText: ''
    });
    const onChange = (e:React.FormEvent<HTMLInputElement>) => {
        const {value} = e.currentTarget;
        const {name} = e.currentTarget;
        setInputs({...inputs,[name]:value});
    };
    const onModify = () => {
      setToDo((oldToDo)=>{
        const idx = oldToDo.findIndex((todo)=> todo.id === id);
        const newToDo = {id,text:inputs.changText,category,category1:inputs.changCate};
            return [...oldToDo.slice(0,idx), newToDo ,...oldToDo.slice(idx+1)];
        });
      setModify((mode)=> !mode)
      };
    return <>
        <LI>
          {modify ?
          <section>
          <InBtn><input type="text" name='changCate' onChange={onChange}/><button name={SAVE} onClick={onModify}>{inputs.changCate === '' && inputs.changText === '' ? '취소' : '저장'}</button></InBtn> 
          <input type="text" name='changText' onChange={onChange} />
          </section> 
          :
          <section> 
          <InBtn className="cate">{category1 === '' ? category : category1}<button name={MODIFY} onClick={onModify}>수정</button></InBtn>
          <p className="desc">{text}</p>
          </section> 
          }
          
          {/* <p className="cate">{category1 === '' ? category : category1}</p> */}
          <div>
          {category === Categorys.TODO || <button name={Categorys.TODO} onClick={onClick}>{Categorys.TODO}</button>}
          {category === Categorys.DOING || <button name={Categorys.DOING} onClick={onClick}>{Categorys.DOING}</button>}
          {category === Categorys.DONE || <button name={Categorys.DONE} onClick={onClick}>{Categorys.DONE}</button>}
          <button name={REMOVE} onClick={onClick}>{REMOVE}</button>
          </div>
        </LI>
    </>;
}
export default ToDo;