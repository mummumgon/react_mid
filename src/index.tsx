import React from "react";
import ReactDOM from "react-dom/client";
import App from './App'
import { QueryClient, QueryClientProvider } from "react-query";
import {RecoilRoot,} from 'recoil';
import { ThemeProvider } from "styled-components";
import { darkTheme , lightTheme} from './theme'
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={darkTheme}>
          <App/>
          </ThemeProvider> 
      </QueryClientProvider >
    </RecoilRoot>
);

