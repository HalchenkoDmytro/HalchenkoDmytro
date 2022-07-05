/* import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); */

import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import header from './component/header';
import main from './component/main';
import footer from './component/footer';

//const footer = React.createElement('footer', )
//const main = React.createElement('main', null, header, footer);

const container = (
  <div className='container'>
    <h2 className='main__title'>root component</h2>
    {header}
    {main}
    {footer}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);
