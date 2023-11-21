import React from 'react';
import { StyleSheetManager } from 'styled-components';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const forwardProps = (prop, validate) => validate(prop);

ReactDOM.render(
  <React.StrictMode>
    <StyleSheetManager shouldForwardProp={forwardProps}>
      <App />
    </StyleSheetManager>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals