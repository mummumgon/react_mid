import { useRecoilState, useRecoilValue } from "recoil";
import { hoursSelector, minuteState } from "../atom";
import ToDoHeader from '../toDo/ToDoHeader'
function Selectors(){
    const [minute, setMinute] = useRecoilState(minuteState);
    const [houre, setHoure] = useRecoilState(hoursSelector);
    const onChange = (e:React.FormEvent<HTMLInputElement>) => {
        setMinute(+e.currentTarget.value);
    };
    const hoursChand = (e:React.FormEvent<HTMLInputElement>) => {
        setHoure(+e.currentTarget.value)
    };

    return <div>
        <ToDoHeader/>
        <div className="container">
            <h1 className="title">Recoil Selector</h1>
            <ul>
                <li style={{margin:'40px 0'}}>
                    <label style={{display:"inline-block", width:'70px'}}>분 : </label><input style={{width:'calc(100% - 70px)'}} type="number" value={minute} onChange={onChange} placeholder="분을 입력하세요(숫자만 입력가능)"/>
                    <p style={{fontSize:14, textAlign:'right'}}>입력한 {Math.floor(minute)}분 == 약 {Math.floor(minute/60)}시간 {Math.floor(minute%60)}분</p>
                    </li>
                <li style={{margin:'40px 0'}}>
                    <label style={{display:"inline-block", width:'70px'}}>시간 :</label><input style={{width:'calc(100% - 70px)'}} type="number" value={houre} onChange={hoursChand} placeholder="시간을 입력하세요(숫자만 입력가능)"/>
                    <p style={{fontSize:14, textAlign:'right'}}>입력한 {Math.floor(houre)}시간 == 약 {Math.floor(houre*60)}분</p>
                    </li>
            </ul>
        </div>
    </div>
}

export default Selectors;