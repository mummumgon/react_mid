import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from './App'
import {RecoilRoot,} from 'recoil';
import { QueryClient , QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const queryClient = new QueryClient();
root.render(
    <RecoilRoot>
      <RecoilRoot>
      <QueryClientProvider client={queryClient}>
          <App/>
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
      </RecoilRoot>
    </RecoilRoot>
);

