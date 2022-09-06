import { atom, selector } from "recoil";

export const minutes = atom({
    key:'minut',
    default:0
})

export const hourSelec = selector({
    key:'hSelec',
    //atom의 정해진 값을 가지고 와서 수정하여 output return하여 값을 표출 
    get: ({get}) => {
        const minut = get(minutes);
        return minut / 60;
    },
    set:({set},newValue)=>{
        //newValue input에 새로 적음 값
        const mitute = (+newValue)*60;
        //minutes:바꾸고 싶은 atom default값, mitut:변경값
        set(minutes,mitute);
    },
   
});