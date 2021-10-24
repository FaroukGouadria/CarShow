import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "react-slideshow-image/dist/styles.css";
import '../node_modules/font-awesome/css/font-awesome.min.css'
import {BrowserRouter} from "react-router-dom"
import store from "./Redux/store"
import {Provider} from "react-redux"

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);


