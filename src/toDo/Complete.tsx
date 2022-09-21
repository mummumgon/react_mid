import { useLocation , Link } from "react-router-dom";
import styled from "styled-components";
import {Helmet} from "react-helmet";
const Btn = styled.button`
    display: inline-block;
    width: 50%;
    padding: 10px;
    margin: 40px 0;
    font-size: 14px;
    a{
        display:block;
        color: ${props=>props.theme.coinColor.bgColor};
}
`;
function Complete(){
    const location = useLocation();
    const state = location.state as {user:string , hobby:[]};
    const {user} = state;
    const {hobby} = state;
    return <div>
             <Helmet>
                <title>회원가입완료</title>
            </Helmet>
        <div className="container" style={{textAlign:'center'}}>
            <h1 className="title">{user}님,</h1>
            <p style={{lineHeight:'26px'}}>가입을<br/>축하드립니다!</p>

            { hobby.length === undefined || hobby.length <= 0? '' : <div className="hobby" style={{margin:'50px 0',padding:'50px 0',borderTop:'5px solid green'}}>
                <p>관심사</p>
                [ {hobby.map((data) => <span key={Date.now()} style={{display:'inline-block', padding:'10px 10px 0 0'}}>{data} <em>/</em></span>)}] 입니다.
            </div>}
            <div className="flex_btw">
                <Btn><Link to='/react_mid'>HOME으로 &gt;</Link></Btn>
                <Btn><Link to='/join'>회원가입 폼으로 &gt;</Link></Btn>
            </div>
        </div>
    </div>
}
export default Complete;