import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter , Route, IndexRoute} from "react-router-dom";
import './index.css';
import App from './pages/App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <HashRouter>
        <Route path="/" component={App}>
        </Route>
    </HashRouter>
    ,
    document.getElementById('root'));
registerServiceWorker();
