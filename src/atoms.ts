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
        console.log(minut);
        return minut / 60;
    },
    //atom자체를 수정
    //set(1,2) 1:recoilatom 가져오기,2.새로운값
    set:({set},newValue) =>{
        console.log('newValue',newValue);
        const minut = Number(newValue)*60
        set(minutes,minut)
    }
});