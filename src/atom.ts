import { atom , selector } from "recoil";
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist({
  key: 'recoil-persist', 
  storage: localStorage,
})

export enum Categorys{
  'TODO'='TODO',
  'DOING'='DOING',
  'DONE'='DONE'
}

export interface IToDo{
  id:number,
  text:string,
  category:Categorys,
  category1?:string
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
    return todo.filter((toDo) => toDo.category === category);
  }
});

//join
export const joinState = atom({
  key: 'joinkey',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
//다크모드
export const darkMode = atom({
  key: 'toggleMode', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
