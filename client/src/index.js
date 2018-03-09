import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router
  } from 'react-router-dom'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';

ReactDOM.render(
    <div>
        <Router>
            <App/>
        </Router>
    </div>,
    document.getElementById('root'));
registerServiceWorker();
