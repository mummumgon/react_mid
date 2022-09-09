import styled from "styled-components";
import {Link} from 'react-router-dom';
import { useQuery } from "react-query";
import { coinFetch } from "../api";

const Container = styled.section`
    max-width: 500px;
    margin: 50px auto;
`
const Title = styled.h1`
    font-size:32px;
    color:${props=>props.theme.textColor};
    text-align: center;
    margin-bottom: 50px;
`;
const BText = styled.span`
    font-size:32px;
    color:${props=>props.theme.textColor};
    text-align: center;
    margin-bottom: 30px;
`;
const ListUl = styled.ul`
    li{
        margin: 10px 0;
        a{
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            padding: 10px 15px;
            border-radius: 5px;
            background-color: ${props=>props.theme.textColor};
            color: ${props=>props.theme.bgColor};
            :hover{
                color: ${props=>props.theme.activeColor};
            }
            img{
            height: 30px;
        }
        }
    }
`;
interface IcoinState{
    id: string,
    is_active: boolean,
    is_new: boolean,
    name: string,
    rank: number,
    symbol: string,
    type: string,
}
function Coins(){
    const {isLoading , data} =  useQuery<IcoinState[]>('allCoin',coinFetch);
    // const [coin, setCoins] = useState<IcoinState[]>(); 
    // const [loading, setLoading] = useState(true); 
    // useEffect(()=>{
    //     (async () =>{
    //         const respon = await(await fetch('https://api.coinpaprika.com/v1/coins')).json();
    //         setCoins(respon.slice(0,12));
    //         setLoading(false)
    //     })()
    // },[]);
    return <div>
        <Container>
            <Title>Coin Infomation</Title>
            {isLoading ? <BText>LODING...'</BText> : 
            <ListUl>
                {data?.slice(0,10)?.map((coin)=> <li key={coin.id}><Link to={`/react_mid/${coin.id}`} state={{name:coin.name}}><img src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`} alt={`${coin.id} logo`} /> {coin.name}<span>&gt;</span></Link></li>)}
            </ListUl>
            }
        </Container>
    </div>
}
export default Coins;