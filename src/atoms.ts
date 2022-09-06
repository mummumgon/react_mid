import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
    key:'localToDo',
});

export enum categorys{
    //기본 값:number ,타입:string
    // 'TO_DO' categorys:'0' ,
    // 'DOING' categorys:'1', 
    // 'DONE'  categorys:'2',
    
    //문자로 정해진 값을 선언
    'TO_DO'='TO_DO' ,
    'DOING'='DOING', 
    'DONE'='DONE',
    'REMOVE'='REMOVE',
}

export interface ITodo{
    text:string,
    id: number,
    category: categorys,
};
export const categoryState = atom<categorys>({
    key:"category",
    default:categorys.TO_DO,
});
export const toDoState = atom<ITodo[]>({
    key:"toDo",
    default:[],
    effects_UNSTABLE:[persistAtom]
});

export const toDoSelector = selector({
    key:'toDoSelect',
    get:({get})=>{
        const toDo = get(toDoState);
        //원하는 카테고리만 표출
        const category = get(categoryState);
        return toDo.filter((toDo)=> toDo.category === category);
    }
});