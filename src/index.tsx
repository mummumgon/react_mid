import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from './App';
import { darkMode , lightMode } from "./theme";
import {BrowserRouter} from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <ThemeProvider theme={ false ? lightMode : darkMode}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </ThemeProvider>
);

