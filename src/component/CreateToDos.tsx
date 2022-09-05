import {useForm} from 'react-hook-form'
import { useRecoilState} from "recoil";
import { toDoState  } from '../atoms';

export interface IForm{
    toDo:string,
}

function CreateTodos(){
    const [toDos , setToDos] = useRecoilState(toDoState);
    const {register ,handleSubmit ,setValue} = useForm<IForm>();
    const onSubmit = ({toDo}:IForm) =>{
        setToDos((oldTodo)=>[{text:toDo,id:Date.now(),category:"TO_DO"},...oldTodo])
        setValue('toDo','');
    }
    return  <form onSubmit={handleSubmit(onSubmit)}>
    <input {...register('toDo', { required: '값 넣어주삼' })} type="text" placeholder="write a to do .." />
    <button>Add</button>
</form>
}

export default CreateTodos;