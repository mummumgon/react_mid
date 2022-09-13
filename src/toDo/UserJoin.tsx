// 작업일 : 2022.09.12 ~ 2022.09.12
// 작업내용: 회원가입폼 만들기
// 비밀번호, 이메일 유효성 검사 추가 및 상황에 맞는 에러메세지 추가
// 체크박스 및 라디오 박스 구현
// localstarage에 가입하기 클릭시 값 업로드
// 'noco'로 가입시 가입안되게 에러메세지 작업

//============ 해야함 ============== 
// joinData를 배열에 추가해서 계속올리기
// userid 옆에 문구의 값 가지고 오기
// 값비교하기
// 가입하기 버튼에 필수값 다 입력시 활성화하기
// 활성화 후에 complete페이지로 넘기기,(거기서 홈으로 이동하기)
import { useRecoilState } from 'recoil'
import { useForm } from "react-hook-form";
import styled from "styled-components";
import {joinState} from "../atom";
const Btn = styled.button`
    width: 100%;
    padding: 20px;
    margin: 40px 0;
    font-size: 22px;
`;
const Error = styled.p`
    color: #ff3d1b;
    font-size: 12px;
    font-weight: normal;
    margin-top: 10px;
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
    const { register , handleSubmit , formState : {errors}, setError} = useForm<IJoinFrom>({
        defaultValues:{
            email:'@',
        }
    });
    const [joinData, setJoinData] = useRecoilState(joinState);
    const onSubmit = (data:any) =>{
        if(data.userPass !== data.userPass1){
            setError('userPass1',{message:'위에 비밀번호가 다릅니다.'});
        };
        setJoinData(data);
    }
    return <div>
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
                        validate: (value) => !value.includes(`noco`)
                        })} placeholder="ID를 입력해주세요" />
                        {errors.userId ? <Error>{errors.userId.message}</Error> : ''}
                    </li>
                    <li>
                        <label className="label pb20">Password</label>
                        <input type="text" {...register("userPass",{required:'Password를 입력하지 않으셨습니다.', 
                        pattern:{
                            value:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,}$/,
                            message:'최소 8자, 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자(@!%*#?&) 조합해 주세요'
                            }
                            })} placeholder="Password 입력해주세요" />
                        {errors.userPass ? <Error>{errors.userPass.message}</Error> : ''}
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