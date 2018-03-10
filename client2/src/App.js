import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {Switch,Route} from 'react-router';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route exact path = "/Projects" component = {Projects}/>
        <Route exact path = "/Deposit" component = {Deposit}/>
        <Route exact path = "/Admin" component = {Admin}/>
      </Switch>
    );
  }
}

export default App;
