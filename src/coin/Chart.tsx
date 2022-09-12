import { coinChartApi } from "../api";
import { useQuery } from 'react-query';
import { useParams } from "react-router-dom";
import ApexChart from "react-apexcharts";
import {Helmet} from "react-helmet";

interface IChartProps{
    time_open: number;
    time_close: number;
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
    market_cap: number;
}

function Chart(){
    const {coinId} = useParams();
    const {isLoading , data} = useQuery<IChartProps[]>(['chart',coinId], ()=>coinChartApi(`${coinId}`));
    console.log(data);
    return <div>
            <Helmet>
                <title>${coinId}/chart</title>
            </Helmet>
        {isLoading ? <p className="flex_btw">LOADING...</p> : 
        <div>
            <ApexChart type='candlestick' 
            series={[
                {
                  data: data?.map((e) => ({x: e.time_close,y: [e.open, e.low, e.high, e.close]})) ?? [],
                }
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
                  background: "transparent",
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
                  categories: data?.map((price) => price.time_close),
                  labels: {
                    style: {
                      colors: '#9c88ff'
                    }
                  }
                },
                plotOptions: {
                  candlestick: {
                    colors: {
                      upward: '#3C90EB',
                      downward: '#DF7D46'
                    }
                  }
                }
              }}
            />
        </div>}
    </div>
}
export default Chart;