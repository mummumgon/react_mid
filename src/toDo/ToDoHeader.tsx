import { useRecoilState } from "recoil";
import { darkMode } from '../atom';
import { useLocation , Link} from "react-router-dom";
function CoinHeader(){
    const [dark, setDark] = useRecoilState(darkMode);
    const onClick = () => setDark((mode)=>!mode);
    const location = useLocation();
    return <header className="header">
        <nav className="flex_btw">
            <Link to="/react_mid">&lt; 홈</Link>
            <button onClick={onClick}>{dark ? '일반모드':'다크모드'}</button>
        </nav>
    </header>
}

export default CoinHeader;