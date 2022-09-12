import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist';

export const darkMode = atom({
    key: 'toggleMode', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
  });

//join
const { persistAtom } = recoilPersist();
export const joinState = atom({
  key: 'joinkey',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});