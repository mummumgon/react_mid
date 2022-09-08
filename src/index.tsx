import React from "react";
import ReactDOM from "react-dom/client";
import App from './App'
import {RecoilRoot,} from 'recoil';
import { ThemeProvider } from "styled-components";
import { darktheme} from './theme';
import { QueryClient , QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const queryClient = new QueryClient();
root.render(
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={darktheme}>
          <App/>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </RecoilRoot>
);

