import { useRecoilState, useRecoilValue } from "recoil";
import { hoursSelector, minuteState } from "../atom";

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
        <div className="container">
            <h1 className="title">Set Selector</h1>
            <ul>
                <li><input type="number" value={minute} onChange={onChange} placeholder="분을 입력하세요"/></li>
                <li><input type="number" value={houre} onChange={hoursChand} placeholder="시간을 입력하세요"/></li>
            </ul>
        </div>
    </div>
}

export default Selectors;