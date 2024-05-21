import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createRoot } from 'react-dom/client';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
    <BrowserRouter basename={baseUrl}>
        <App />
    </BrowserRouter>
   
);


// ReactDOM.render(
//   <BrowserRouter basename={baseUrl}>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
