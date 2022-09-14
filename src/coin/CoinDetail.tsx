import { useParams , Link, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { dtailCoinApi , dtailPriceApi, IDetailPriceProps } from "../api";
import { useQuery } from 'react-query';
import Chart from "./Chart";
import Price from "./Price";
import CoinHeader from "./CoinHeader";
import {Helmet} from "react-helmet";
const ListUl = styled.ul`
  background-color: ${props => props.theme.coinColor.textColor};
  align-items: flex-start;
  border-radius: 10px;
  margin: 20px 0;
  li{ 
    flex: 1;
    padding: 20px;
    span{
      display: block;
      font-size:14px;
      color:${props=>props.theme.coinColor.activeColor};
      padding-bottom: 10px;
      text-transform: uppercase;
    }
    p{
      font-size: 20px;
      color: ${props => props.theme.coinColor.bgColor};
    }
    }
`;
const TabWrap = styled.div`
  margin: 0 -5px;
  a{
    flex: 1;
    display: block;
    line-height: 50px;
    border-radius:10px;
    padding: 0 20px;
    margin: 0 5px;
    background-color: ${props => props.theme.coinColor.textColor};
    color: ${props => props.theme.coinColor.bgColor};
  }
`;
interface IDetailCoinProps{
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;

}



function CoinDetail(){
  const {coinId} = useParams();
  const {isLoading:coinLoding , data:coinInfo} = useQuery<IDetailCoinProps>(['coin',coinId],()=>dtailCoinApi(`${coinId}`));
  const {isLoading:PriceLoding , data:priceInfo} = useQuery<IDetailPriceProps>(['price',coinId],()=>dtailPriceApi(`${coinId}`));
  const loding = coinLoding || PriceLoding;
    return <div className="container">
          <Helmet>
                <title>${coinId}</title>
            </Helmet>
        <CoinHeader/>
        {loding ? <p className='dest'>Loing...</p> 
        :
        <div>
          <h1 className="title">{priceInfo?.name ? priceInfo?.name  : <p className='dest'>Loing...</p>}</h1>
          <ListUl className="flex_btw">
            <li><span>rank</span><p>{coinInfo?.rank}</p></li>
            <li><span>symbol</span><p>{coinInfo?.symbol}</p></li>
            <li><span>is_new</span><p>{coinInfo?.is_new || 'No data'}</p></li>
          </ListUl>
          <p>{coinInfo?.description}</p>
          <ListUl className="flex_btw">
            <li><span>total_supply</span><p>{priceInfo?.total_supply}</p></li>
            <li><span>price</span><p>{(priceInfo?.quotes.USD.price.toFixed(3))}</p></li>
          </ListUl>
          <TabWrap className="flex_btw">
            <Link to={`/react_mid/coins/${coinId}/chart`}>Chart</Link>
            <Link to={`/react_mid/coins/${coinId}/price`}>Price</Link>
          </TabWrap>
        <Routes>
          <Route path="chart" element={<Chart/>}/>
          <Route path="price" element={<Price/>}/>
        </Routes>
        </div>
      }
    </div>
}
export default CoinDetail;