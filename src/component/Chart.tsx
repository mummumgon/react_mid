import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { chartData } from "../api";
import ApexChart from 'react-apexcharts'
import { darkModeAtom } from "../atom";
import { useRecoilValue} from 'recoil';
interface chartState{
    time_open: number,
    time_close: number,
    open: string,
    high: string,
    low: string,
    close: string,
    volume: string,
    market_cap: number,
}

function Chart(){
  const isDark = useRecoilValue(darkModeAtom);
    const {coinId} = useParams();
    const {isLoading, data} = useQuery<chartState[]>(['chart',coinId] , ()=> chartData(`${coinId}`));
    return <div>
        {isLoading ? "LODING..."
        : data?.length === undefined ? "데이타 없음" : <div>
            {/* //  {x: new Date(time_close),y: [open, high, low, close]}, */}
           <ApexChart type="candlestick" series={[
            {
              data: data?.map((info)=> ({x:info.time_close,y:[info.open, info.high, info.low, info.close]})) ?? []
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              type: "candlestick",
              height: 350,
              width: 500,
              toolbar: {
                show:false,
              },
              background: isDark ?  'light' : 'dark',
            },
            
            stroke: {
              curve: "smooth",
              width: 2,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              type: "datetime",
              categories: data?.map((time) => time.time_close),
              labels: {
                style: {
                  colors: isDark ?  '#eee' : '#333',
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
        </div>
        }
    </div>
   
}
export default Chart;