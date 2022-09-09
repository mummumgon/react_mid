import { DefaultTheme } from 'styled-components';

export const darkMode: DefaultTheme = {
  coinColor: {
    bgColor: '#333',
    textColor: '#eee',
    activeColor:'red',
  },
};

export const lightMode: DefaultTheme = {
  coinColor: {
    bgColor: '#eee',
    textColor: '#333',
    activeColor:'green',
  },
};
