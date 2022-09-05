import { atom, selector } from "recoil";

export interface ITodo{
    text:string,
    id: number,
    category: 'TO_DO' | 'DOING' | 'DONE'; 
};
export const categoryState = atom({
    key:"category",
    default:'TO_DO',
});
export const toDoState = atom<ITodo[]>({
    key:"toDo",
    default:[],
});

export const toDoSelector = selector({
    key:'toDoSelect',
    get:({get})=>{
        const toDo = get(toDoState);
        //전체 보여짐
        // const AllViewToDo = [
        //     toDo.filter((toDo)=> toDo.category === 'TO_DO'),
        //     toDo.filter((toDo)=> toDo.category === 'DOING'), 
        //     toDo.filter((toDo)=> toDo.category === 'DONE'),
        // ];
        // return AllViewToDo;

        //원하는 카테고리만 표출
        const category = get(categoryState);
        return toDo.filter((toDo)=> toDo.category === category);
    }
});