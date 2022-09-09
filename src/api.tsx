const BASEURL = 'https://api.coinpaprika.com/v1';

export function coinFetch(){
    return fetch(`${BASEURL}/coins`).then((response)=>response.json());
}

export function coinDetailInfo(coinId:string){
    return fetch(`${BASEURL}/coins/${coinId}`).then((response)=>response.json());
}
export function priceDetailInfo(coinId:string){
    return fetch(`${BASEURL}/tickers/${coinId}`).then((response)=>response.json());
}

export function chartData(coinId:string){
    const endData = Math.floor(Date.now()/1000);
    const startDate = endData - 60 * 60 * 20;
    return fetch(`https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinId}`).then((response)=>response.json());
}