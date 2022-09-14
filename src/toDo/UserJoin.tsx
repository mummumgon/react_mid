// 작업일 : 2022.09.12 ~ 2022.09.12
// 작업내용: 회원가입폼 만들기
// Library : Recoil,react-hook-form,styled-component,recoil-persist
// 기능적용: 
// 비밀번호, 이메일 유효성 검사 추가 및 상황에 맞는 에러메세지 추가
// 체크박스 및 라디오 박스 구현
// localstotage에 가입하기 클릭시 값 업로드
// localstotage저장된 가입한 아이디 비교 후 가입 안되게 에러메세지 작업

import { useRecoilState } from 'recoil'
import { useForm } from "react-hook-form";
import styled from "styled-components";
import {joinState} from "../atom";
import ToDoHeader from "./ToDoHeader";
import { useNavigate } from 'react-router-dom';
const Btn = styled.button`
    width: 100%;
    padding: 10px;
    margin: 40px 0;
    font-size: 18px;
`;
const Error = styled.p`
    color: #ff3d1b;
    font-size: 12px;
    font-weight: normal;
    margin-top: 10px;
`;
const Hint = styled(Error)`
    color:${props=>props.theme.coinColor.textColor};
`;

interface IJoinFrom{
    userId:string;
    userPass:string;
    userPass1:string;
    email:string;
    hobby:[];
    sendEmail:string;
    sendSms:string;
    radio:string;
}
function UserJoin(){
    const navigate = useNavigate();
    const { register , handleSubmit , formState : {errors}, setError,watch} = useForm<IJoinFrom>();
    const [joinData, setJoinData] = useRecoilState(joinState);
    const onSubmit = (data:any) =>{
        if(data.userPass !== data.userPass1){
            setError('userPass1',{message:'위에 비밀번호가 다릅니다.'});
        };
        setJoinData(data);
        navigate("/join/complete",  { state: { user:data.userId, hobby:data.hobby }});
    };
    console.log('joinData',joinData.userId);
    return <div> 
        <ToDoHeader/>
        <div className="container">
            <h1 className="title">회원가입</h1>
        <div className="form_type">
            <form onSubmit={handleSubmit(onSubmit)}>
                <ul>
                    <li>
                        <label className="label pb20">ID</label>
                        <input type="text" className={errors.userId ? 'error': ''} {...register("userId",{required:'아이디를 입력하지 않으셨습니다.', 
                        minLength:{
                            value:5,
                            message:'최소 5글자 이상 적어주세요',
                        },
                        validate: {
                            noNico: (value) =>
                            value === joinData.userId ? '중복아이디 입니다.' : true,
                          },
                        })} placeholder="ID를 입력해주세요" />
                        {errors.userId ? <Error>{errors.userId.message}</Error> : <Hint>최소 5글자 이상 적어주세요</Hint>}
                    </li>
                    <li>
                        <label className="label pb20">Password</label>
                        <input type="text" {...register("userPass",{required:'Password를 입력하지 않으셨습니다.', 
                        pattern:{
                            value:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,}$/,
                            message:'조건에 맞지 않습니다. 확인 후 다시 작성해'
                            }
                            })} placeholder="Password 입력해주세요" />
                        {errors.userPass ? <Error>{errors.userPass.message}</Error> : <Hint>최소8자, 최소하나의 문자, 하나의 숫자 및 하나의 특수 문자(@!%*#?&) 조합해 주세요</Hint>}
                    </li>
                    <li>
                        <label className="label pb20">Password 확인</label>
                        <input type="text" className={errors.userPass1 ? 'error': ''} {...register("userPass1",{required:'Password를 입력하지 않으셨습니다.',pattern:{
                            value:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,}$/,
                            message:'최소 8 자, 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자 조합해 주세요'
                            }})} placeholder="Password를 다시 한번 적어주세요" />
                        {errors.userPass1 ? <Error>{errors.userPass1.message}</Error> : ''}
                    </li>
                    <li>
                        <label className="label pb20">Email</label>
                        <input type="email" className={errors.email ? 'error': ''} {...register("email",{required:'Email를 입력하지 않으셨습니다.',pattern:{
                            value:/^[a-zA-Z0-9+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                            message:"작성하신 이메일 형식에 문제가 있습니다."
                        }})} placeholder="Email를 입력해주세요" />
                        {errors.email ? <Error>{errors.email.message}</Error> : ''}
                    </li>
                    <li>
                        <p className="label">관심사</p>
                        <label className="c_label"><input type="checkbox" {...register("hobby")} value="음식" />음식</label>
                        <label className="c_label"><input type="checkbox" {...register("hobby")} value="여행"/>여행</label>
                        <label className="c_label"><input type="checkbox" {...register("hobby")} value="노래"/>노래</label>
                        <label className="c_label"><input type="checkbox" {...register("hobby")} value="독서"/>독서</label>
                        <label className="c_label"><input type="checkbox" {...register("hobby")} value="쇼핑"/>쇼핑</label>
                        {errors.hobby ? <Error>{errors.hobby.message}</Error> : ''}
                    </li>
                    <li>
                        <p className="label">Email 수신</p>
                        <label className="c_label"><input type="radio" {...register("sendEmail",{required:'Email 수신을 선택해 주세요'})} value="yes" checked/>yes</label>
                        <label className="c_label"><input type="radio" {...register("sendEmail",{required:'Email 수신을 선택해 주세요'})} value="no"/>no</label>
                        {errors.sendEmail ? <Error>{errors.sendEmail.message}</Error> : ''}
                    </li>
                    <li>
                        <p className="label">SMS 수신</p>
                        <label className="c_label"><input type="radio" {...register("sendSms",{required:'SMS 수신을 선택해 주세요'})} value="yes" checked/>yes</label>
                        <label className="c_label"><input type="radio" {...register("sendSms",{required:'SMS 수신을 선택해 주세요'})} value="no"/>no</label>
                        {errors.sendSms ? <Error>{errors.sendSms.message}</Error> : ''}
                    </li>
                </ul>
                <Btn>가입하기</Btn>
            </form>
        </div>
        </div>
    </div>
}
export default UserJoin;