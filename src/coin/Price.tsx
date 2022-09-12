import { dtailPriceApi, IDetailPriceProps } from "../api";
import { useQuery } from 'react-query';
import { useParams } from "react-router-dom";
import ApexChart from "react-apexcharts";
import styled from "styled-components";
import {Helmet} from "react-helmet";

const ListUl = styled.ul`
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 20px -5px;
  padding: 20px 0;
  border-top: 4px dotted ${props=>props.theme.coinColor.activeColor};
  li{ 
      margin: 5px ;
      border-radius: 10px;
        background-color: ${props => props.theme.coinColor.textColor};
        width: calc(50% - 10px);
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

function Price(){
    const {coinId} = useParams();
    const {isLoading , data} = useQuery<IDetailPriceProps>(['price',coinId], ()=> dtailPriceApi(`${coinId}`));

    return <div>
          <Helmet>
                <title>${coinId}/price</title>
            </Helmet>
        {isLoading ? <p className="dest">LOADING...</p> : <div>

        <ListUl className="flex_btw">
            <li><a href="javascript:void()"><span>percent_change_1h</span><p>{Math.floor(Number(data?.quotes.USD.percent_change_1h)*100)}%</p></a></li>
            <li><a href="javascript:void()"><span>percent_change_6h</span><p>{Math.floor(Number(data?.quotes.USD.percent_change_6h)*100)}%</p></a></li>
            <li><a href="javascript:void()"><span>percent_change_12h</span><p>{Math.floor(Number(data?.quotes.USD.percent_change_12h)*100)}%</p></a></li>
            <li><a href="javascript:void()"><span>percent_change_24h</span><p>{Math.floor(Number(data?.quotes.USD.percent_change_24h)*100)}%</p></a></li>
        </ListUl>
        </div>}
    </div>
}
export default Price;