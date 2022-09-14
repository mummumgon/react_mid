import { useRecoilState } from "recoil";
import { darkMode } from '../atom';
import { useLocation , Link} from "react-router-dom";
function CoinHeader(){
    const [dark, setDark] = useRecoilState(darkMode);
    const onClick = () => setDark((mode)=>!mode);
    const location = useLocation();
    return <header className="header">
        <nav className="flex_btw">
            {/* <Link to="/coins">{ location.pathname === '/coins' ||  location.pathname === '/coins/' ? '< 홈' : `< 뒤로가기`}</Link> */}
            { location.pathname === '/react_mid/coins' ||  location.pathname === '/react_mid/coins/' ? <Link to="/react_mid">&lt; 홈</Link> : <Link to="/react_mid/coins">&lt; 뒤로가기</Link>}
            <button onClick={onClick}>{dark ? '일반모드':'다크모드'}</button>
        </nav>
    </header>
}

export default CoinHeader;