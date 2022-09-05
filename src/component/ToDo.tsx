import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { ITodo , toDoState } from "../atoms";

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
    margin: 0 5px;
`;
const Flex = styled.div`
    display: flex;
    align-items: center;
    margin : 0 -5px;
    padding: 10px 0;
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
            const newArr = [...oldToDO.slice(0,toDoIndex),newToDo,...oldToDO.slice(toDoIndex+1)];
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
            {/* 
            3개 버튼 다보이며, = 방법1
            <Btn onClick={()=>onClick('TO_DO')}>To Do</Btn>
            <Btn onClick={()=>onClick('DOING')}>Doing</Btn>
            <Btn onClick={()=>onClick('DONE')}>Done</Btn> */}
            {/* 해당상태에 버튼은 안보임  = 방법2*/}
            {category !== "TO_DO" && <Btn name="TO_DO" onClick={onClick}>To Do</Btn>}
            {category !== "DOING" && <Btn name="DOING" onClick={onClick}>Doing</Btn>}
            {category !== "DONE" && <Btn name="DONE" onClick={onClick}>Done</Btn>}
            </Flex>
        </ToDoli>
    );
}

export default CreateTodo;

//2번의 mango를 바꾸고 싶을때! 감으로 교체
// const food = ['pizzs','mango','gim','remon'];
// const first = ['pizzs'];
// const last = ['gim','remon'];
// const lastconpo = [first + '감' + last] ['pizzs','감','gim','remon']
// 이런느낌으로 추가
