import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { categorys, ITodo , toDoState } from "../atoms";

const ToDoli = styled.li`
border-bottom: 1px solid #eee;
    span{
        display: block;
        font-size:14px;
        text-align:right;
        background-color: #666;
        padding: 10px;
        border-radius: 4px;
    }
    p{
        padding: 20px 10px;
        background-color: #999;
        color: #333;
        font-weight: bold;
        
    }
`;
const Btn = styled.button`
    flex: 1;
    height: 30px;
`;
const Flex = styled.div`
    display: flex;
    align-items: center;
`;

function CreateTodo({text , category, id}:ITodo){
    const setToDos = useSetRecoilState(toDoState);
    // 방법1
    // const onClick = (newCategory:ITodo['category'])=>{
    //     console.log('now  ',newCategory)
    // };
    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { name } = e.currentTarget;
        setToDos((oldToDO)=>{
            //target의 경로 찾기
            const toDoIndex = oldToDO.findIndex(oldTD => oldTD.id === id);
            //새로운 값저장
            //[category:name as any] 원래는 그냥 스트링인데 체크하지 말라고 as any적음
            const newToDo = {text , id, category:name as any};
            //새로 배열 조함
            let newArr =[];
            //remove클릭시 localstoragy에 삭제
            if(name === categorys.REMOVE){
                newArr = [...oldToDO.slice(0,toDoIndex),...oldToDO.slice(toDoIndex+1)];
            }else{
                newArr = [...oldToDO.slice(0,toDoIndex),newToDo,...oldToDO.slice(toDoIndex+1)];
            };
            console.log(name);
            return newArr;
        });
    };
    
    return (
        <ToDoli>
            <div>
                <span>{category}</span>
                <p>{text}</p>
            </div> 
            <Flex>
                {/* category !== categorys.TO_DO 다르면 버튼이 보임 TODO상태인데 TODO버튼이 보이면 안됨*/}
            {category !== categorys.TO_DO && <Btn name={categorys.TO_DO} onClick={onClick}>To Do</Btn>}
            {category !== categorys.DOING && <Btn name={categorys.DOING} onClick={onClick}>Doing</Btn>}
            {category !== categorys.DONE && <Btn name={categorys.DONE} onClick={onClick}>Done</Btn>}
            <Btn name={categorys.REMOVE} onClick={onClick}>remove</Btn>
            </Flex>
        </ToDoli>
    );
}

export default CreateTodo;
