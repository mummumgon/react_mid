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