import ApexChart from 'react-apexcharts'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { priceDetailInfo } from '../api';

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
        }
    };
}
const donutData = {
    series: [50,40,30,10,0],
    options: {
      chart: {
        type: 'donut',
      },
      legend: {
        position: 'bottom'
      },
      responsive: [{
        breakpoint: 480,
      }],
      plotOptions: {
        pie: {
          donut: {
            // hollow: {  
            //   margin: 15,
            //   size: '70%',
            //   image: '../../css/images/a-icon.jpg',
            //   imageWidth: 64,
            //   imageHeight: 64,
            //   imageClipped: false
            // },
            labels: {
              show: true,
              total: {
                showAlways: true,
                show: true,
                label: 'ALARM',
                fontSize: '12px',
                color: 'red'
              },
              value: {
                fontSize: '22px',
                show: true,
                color: 'blue',
              },
            },
          }
        }
      },
      labels: ["침입", "배회", "쓰러짐", "화재", "안전모"],
      title: {
        text: '이벤트별 통계',
        align: 'center'
      },
    },
  }
function Price(){
    const {coinId} = useParams<string>();
    const {isLoading , data} = useQuery<IPriceState>(`tprice-${coinId}`,()=>priceDetailInfo(`${coinId}`));

    const persentHours = [data?.quotes.USD.percent_change_1h, data?.quotes.USD.percent_change_6h,data?.quotes.USD.percent_change_12h, data?.quotes.USD.percent_change_24h];
    const title = Object.keys(persentHours);
    console.log(data?.quotes.USD);
    const [ h1 , h6, h12, h24 ] =  persentHours.map((data) => Math.floor(Number(data)*100));
    return <div>
        {isLoading ? 'LOADING...' 
        :
        <ApexChart type="pie" series={[h1, h6, h12, h24]}
          width={`100%`}
          height={300}
          breakpoint={ 480}
          options={{
            labels: ['change_1h','change_6h','change_12h','change_24h'],
            title: {
              text: `${data?.quotes.USD.ath_date} 시간별 수치`,
              align: 'center'
            },
            theme: {
              mode: "dark",
            },
            chart: {
              type: "pie",
              height: 350,
              width: 500,
            },
            legend: {
                position: 'bottom'
              },
            xaxis: {
              type: "datetime",
              labels: {
                style: {
                  colors: '#333',
                }
              }
            },
            
            plotOptions: {
              candlestick: {
                colors: {
                  upward: '#3C90EB',
                  downward: '#eb4015'
                }
              }
            }
          }}
        />
         }
    </div>
}
export default Price;