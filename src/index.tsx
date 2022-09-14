import ReactDOM from "react-dom/client";
import App from './App';

import {HashRouter} from 'react-router-dom'
import { QueryClient,QueryClientProvider } from 'react-query'
import {RecoilRoot} from 'recoil';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const queryClient = new QueryClient()
root.render(
    <RecoilRoot>
        <QueryClientProvider client={queryClient}>
                <HashRouter>
                    <App/>
                </HashRouter>
        </QueryClientProvider>
    </RecoilRoot>
);

