import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router
  } from 'react-router-dom'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';

ReactDOM.render(
    <div>
        <Router>
            <App/>
        </Router>
    </div>,
    document.getElementById('root'));
registerServiceWorker();
