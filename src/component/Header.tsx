import styled from "styled-components";
import { useRecoilState} from 'recoil';
import { darkModeAtom } from '../atom';
import { Link, useLocation} from 'react-router-dom';
const PHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:10px 20px;
    background-color: #999;
    button{
        font-size: 20px;
    }
`;


function Header(){
    const [isDark, setIsdark] = useRecoilState(darkModeAtom);
    const location = useLocation();
    const onClick = () => setIsdark((mode)=> !mode);
    return <PHeader>
        {location.pathname === "/react_mid" || location.pathname === "/react_mid/" ? <span></span> : <Link to="/react_mid"> &lt; BACK</Link>}
        <button onClick={onClick}>{isDark ? 'Nomal Mode' : 'Dark mode'}</button>
    </PHeader>;
}
export default Header;