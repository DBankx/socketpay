import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {createBrowserHistory} from  "history";
import {Router, Route} from "react-router-dom";
import { QueryParamProvider } from 'use-query-params';

export const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
      <Router history={history}>
          <QueryParamProvider ReactRouterRoute={Route}>
    <App />
          </QueryParamProvider>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
