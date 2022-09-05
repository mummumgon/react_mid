import { atom, selector } from "recoil";

export const TO_DO="TO_DO";
export const DOING = "DOING";
export const DONE = "DONE";

export interface ITodo{
    text:string,
    id: number,
    category: 'TO_DO' | 'DOING' | 'DONE'; 
}
export const toDoState = atom<ITodo[]>({
    key:"toDo",
    default:[],
})

export const toDoSelector = selector({
    key:'toDoSelect',
    get:({get})=>{
        const toDo = get(toDoState);
        const AllViewToDo = [
            toDo.filter((toDo)=> toDo.category === 'TO_DO'),
            toDo.filter((toDo)=> toDo.category === 'DOING'), 
            toDo.filter((toDo)=> toDo.category === 'DONE'),
        ];
        return AllViewToDo;
    }
});