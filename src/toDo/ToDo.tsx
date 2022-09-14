import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { Categorys, IToDo, toDoState } from "../atom";
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
function ToDo({text,id,category}:IToDo){
    const setToDo = useSetRecoilState(toDoState);
    const onClick = (e:React.MouseEvent<HTMLButtonElement>) =>{
        const {name} = e.currentTarget;
        setToDo((oldToDo)=>{
          const idx = oldToDo.findIndex((todo)=> todo.id === id);
          const newToDo = {id,text,category:name as Categorys};
          return [...oldToDo.slice(0,idx), newToDo ,...oldToDo.slice(idx+1)];
        });
      }
    return <>
        <LI>
          <p className="cate">{category}</p>
          <p className="desc">{text}</p>
          <div>
          {category === Categorys.TODO || <button name={Categorys.TODO} onClick={onClick}>{Categorys.TODO}</button>}
          {category === Categorys.DOING || <button name={Categorys.DOING} onClick={onClick}>{Categorys.DOING}</button>}
          {category === Categorys.DONE || <button name={Categorys.DONE} onClick={onClick}>{Categorys.DONE}</button>} 
          </div>
        </LI>
    </>;
}
export default ToDo;