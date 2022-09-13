import { atom , selector, useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE } from "recoil";
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist();
export enum Categorys{
  'TODO'='TODO',
  'DOING'='DOING',
  'DONE'='DONE'
}

export interface IToDo{
  id:number,
  text:string,
  category:Categorys,
}

//todo
export const toDoState = atom<IToDo[]>({
  key:'toDos',
  default:[],
  effects_UNSTABLE: [persistAtom],
})
export const categoryState = atom<Categorys>({
  key:'catas',
  default:Categorys.TODO,
})

export const todoSelector = selector({
  key:'toDoSelect',
  get:({get})=>{
    const todo = get(toDoState);
    const category = get(categoryState);
    if(category === 'TODO') return todo.filter((toDo) => toDo.category === 'TODO');
    if(category === 'DOING') return todo.filter((toDo) => toDo.category === 'DOING');
    if(category === 'DONE') return todo.filter((toDo) => toDo.category === 'DONE');
  }
});

//join
export const joinState = atom({
  key: 'joinkey',
  default: []
});
//다크모드
export const darkMode = atom({
  key: 'toggleMode', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
