import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {BrowserRouter as Router} from "react-router-dom"

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);


