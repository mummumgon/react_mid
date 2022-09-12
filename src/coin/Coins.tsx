// 작업일 : 2022.09.09 ~ 2022.09.10
// 작업내용: Coin Api값 표출
// - 다크모드 - 차트 - 탭기능 - Api연결
import {Link } from 'react-router-dom';
import styled from 'styled-components';
import { coinApi } from '../api';
import { useQuery } from 'react-query';
import CoinHeader from "./CoinHeader";
import {Helmet} from "react-helmet";

const ListUl = styled.div`
 li a{
        background-color: ${props=>props.theme.coinColor.textColor};
        color: ${props=>props.theme.coinColor.bgColor};
    }
`;

interface ICoinProps{
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string
}

function Coins(){
    // const [dark , setDark] = useState(false);
   
     const {isLoading, data} = useQuery<ICoinProps[]>('AllCoin', coinApi);
    return (
    <div className='container'>
            <Helmet>
                <title>Coin List</title>
            </Helmet>
        <CoinHeader />
        {isLoading ? <p className='dest'>Loing...</p> 
        :
        <div>
            <h1 className='title dot'>Coin Infomation.</h1>
            <ListUl className='list_type'>
                {data?.slice(0,10).map((coin) => <li key={coin.id}>
                    <Link to={`/coins/${coin.id}`}>
                        <img src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`} alt="" />
                        {coin.name}<em>&gt;</em>
                    </Link>
                    </li>)}
            </ListUl>
        </div>
        }
    </div>
    )
}
export default Coins;