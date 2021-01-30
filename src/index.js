import React from 'react';
import ReactDOM from 'react-dom';
// import {combineReducers, createStore} from 'redux'
// import {Provider} from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import landingSearchReducer from './store/reducers/landingSearch'

// const rootReducer=combineReducers({
//   landSearch:landingSearchReducer
// })

// const store=createStore(rootReducer)

ReactDOM.render(
  // <Provider store={store}>
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  // </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
