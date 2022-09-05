import { AnyARecord } from "dns";
import React, { useState } from "react";
import {useForm} from 'react-hook-form'
// function ToDoList(){
//     const [ToDo, setToDo] = useState('');
//     const onChange = (e:React.FormEvent<HTMLInputElement>) => {
//         const { value } = e.currentTarget;
//         setToDo(value);
//     };
//     const onSubmit = (e:React.FormEvent<HTMLFormElement>) =>{ e.preventDefault();};
//     return <div>
//         sdfasd
//         <form onSubmit={onSubmit}>
//             <input onChange={onChange} value={ToDo} type="text" placeholder="write a to do .." />
//             <p>{ToDo}</p>
//             <button>Add</button>
//         </form>
//     </div>;
// }
interface IuseValid{
    email:string,
    firstname:string,
    lastname:string,
    username:string,
    password:string,
    password1:string,
    exError?:string,
}
function ToDoList(){
    //useForm ->handleSubmit,register(each문 처럼 값을 가져옴)기능 제공
    const { register , watch , handleSubmit ,  formState: { errors },setError , setValue } = useForm<IuseValid>({
        defaultValues:{ //기본값 설정
            email:'@naver.com'
        }
    });
    //데이터가 없을대 에러 (전달받은 데이터가 보여짐)
    const onValid = (data:IuseValid)=>{
        if(data.password !== data.password1){
            // shouldFocus => form이 submit 할때 에러 발생시키면 에러난 곳에 포커스이동 시켜줌
            setError('password1', {message:'작성하신 비밀번호가 다릅니다.'},{shouldFocus:true}) 
        };
        setValue('email','')
        //form 전체적인 에러 예시
        //setError('exError',{message:'서버에 문제가 생겼습니다.'})
    };
    //error
    console.log(errors);
    return <div>
         <form onSubmit={handleSubmit(onValid)} style={{
            display: 'flex',
            flexDirection:"column"
         }}>
             <input {...register("email",{required:'email 값넣어줘!', pattern:{value:/^[A-Za-z0-9._%+-]+@naver.com$/,message:"다시 작성해줘"}})} type="text" placeholder="email .." />
             <span>{errors?.email?.message }</span>
             <input {...register("firstname",{required:'firstname 값넣어줘!',
                validate: { 
                    noNico:(value)=> value.includes('nico')? 'nico이름은 안되' : true,
                    noNick:(value)=> value.includes('nick')? 'nick이름은 안되' : true,
                }
            })} type="text" placeholder="first name" />
             <span>{errors?.firstname?.message }</span>
             <input {...register("lastname",{required:'lastname 값넣어줘!'})} type="text" placeholder="last name .." />
             <span>{errors?.lastname?.message }</span>
             <input {...register("username",{required:'username 값넣어줘!' , max:10})} type="text" placeholder="user name .." />
             <span>{errors?.username?.message }</span>
             <input {...register("password",{required:'password 값넣어줘!' , minLength:{value:5, message:'password short..'}})} type="text" placeholder="password .." />
             <span>{errors?.password?.message }</span>
             <input {...register("password1",{required:'password1 값넣어줘', minLength:{value:5, message:'password short..'}})} type="text" placeholder="password1 .." />
             <span>{errors?.password1?.message }</span>
             <button>Add</button>
         </form>
     </div>;
}

export default ToDoList;