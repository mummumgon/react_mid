import { useQuery } from "react-query";
import { useLocation, useParams ,Link, Routes, Route, useMatch } from "react-router-dom";
import styled from "styled-components";
import { coinDetailInfo, priceDetailInfo } from "../api";
import Chart from "./Chart";
import Price from "./Price";
const Container = styled.section`
    max-width: 500px;
    margin: 50px auto;
    padding: 0 20px;
`
const Title = styled.h1`
    font-size:32px;
    color:${props=>props.theme.textColor};
    text-align: center;
    margin-bottom: 50px;
`;
const BText = styled.p`
    font-size:32px;
    color:${props=>props.theme.textColor};
    text-align: center;
    margin-bottom: 30px;
`;
const InfoList = styled.ul`
    display:flex;
    align-items: flex-start;
    border-radius: 10px;
    background-color: ${props=>props.theme.textColor};
    color: ${props=>props.theme.bgColor};
    padding: 20px;
`;
const Item = styled.li`
    flex: 1;
    span{
        color: ${props=>props.theme.bgColor};
        text-transform: uppercase;
        font-size: 14px;
        
    }
    p{
        font-size:22px;
        color: #17c26d;
        padding-top: 10px;
        word-break:break-word;
    }
`;
const TextBox = styled.div`
    padding: 20px;
    font-size: 20px;
    *{
        font-size: inherit;
    }
`;
const Tabwrap = styled(InfoList)`
    background-color: transparent;
    padding: 0;
    margin:0 -5px;
`;
const Tab = styled(Item)<{Active:boolean}>`
    border-radius: 10px;
    margin:40px 5px;
    overflow: hidden;
    text-align: center;
    a{
        display: block;
        padding: 16px;
        font-weight:bold;
        background-color: ${props =>props.theme.textColor};
        color: ${props => props.Active ? props.theme.activeColor : props.theme.bgColor};
    }
`;
interface ICoinState{
    id:string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
    contract: string;
    platform: string;
    description: string;
    message: string;
    open_source: boolean;
    development_status: string;
    hardware_wallet: boolean;
    proof_type: string;
    org_structure: string;
    hash_algorithm: string;
    first_data_at: string;
    last_data_at: string;
}
interface IPriceState{
    id:string;
    name:string;
    symbol:string;
    rank:number;
    circulating_supply:number;
    total_supply:number;
    max_supply:number;
    beta_value:number;
    first_data_at:string;
    last_updated:string;
    quotes:{
        USD:{
            price:number;
            volume_24h:number;
            volume_24h_change_24h:number;
            market_cap:number;
            market_cap_change_24h:number;
            percent_change_15m:number;
            percent_change_30m:number;
            percent_change_1h:number;
            percent_change_6h:number;
            percent_change_12h:number;
            percent_change_24h:number;
            percent_change_7d:number;
            percent_change_30d:number;
            percent_change_1y:number;
            ath_price:number;
            ath_date:string;
            percent_from_price_ath:number;
        };
    };
}

function Coin(){
    const {coinId} = useParams();
    const location = useLocation();
    const state = location.state as {name:string};
    const chartLocation = `/react_mid/${coinId}/chart`;
    const priceLocation = `/react_mid/${coinId}/price`;
    const chartMatch = useMatch(chartLocation);
    const priceMatch = useMatch(priceLocation);
    const {isLoading:coinLoding , data:coinData} = useQuery<ICoinState>(['coin',coinId] , () => coinDetailInfo(`${coinId}`));
    const {isLoading:priceLoding , data:priceData} = useQuery<IPriceState>(`price-${coinId}`, () => priceDetailInfo(String(coinId)));
    const loding = coinLoding || priceLoding;
    return <div>
        <Container>
            <Title>{state?.name ? state.name : loding ? <BText>LOADING..</BText> :coinData?.name }</Title>
            {loding ? <BText>LOAING...</BText> :<div> 
                <InfoList>
                    <Item><span>RANK :</span><p>{coinData?.rank}</p></Item>
                    <Item><span>symbol :</span><p>{coinData?.symbol}</p></Item>
                    <Item><span>type :</span><p>{coinData?.type}</p></Item>
                </InfoList>
                <TextBox>{coinData?.description}</TextBox>
                <InfoList>
                    <Item><span>total_supply :</span><p>{priceData?.total_supply}</p></Item>
                    <Item><span>max_supply :</span><p>{priceData?.max_supply}</p></Item>
                </InfoList>
                <Tabwrap>
                    <Tab Active={chartMatch!==null}><Link to={chartLocation}>CHART</Link></Tab>
                    <Tab Active={priceMatch!==null}><Link to={priceLocation}>PRICE</Link></Tab>
                </Tabwrap>
            </div>
            }
            <Routes>
                <Route path="chart" element={<Chart/>}/>
                <Route path="price" element={<Price/>}/>
            </Routes>
        </Container>
        
    </div>
}
export default Coin;