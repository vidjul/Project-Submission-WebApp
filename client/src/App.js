import React, { Component } from 'react';
import {Route, Switch} from "react-router";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Deposit from './pages/Deposit';
import Connection from './pages/Connection';
import Admin from './pages/Admin';
import EditDeposit from './pages/EditDeposit';
import ForgetPass from './pages/ForgetPass'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route exact path = "/Projects" component = {Projects}/>
        <Route exact path = "/Deposit" component = {Deposit}/>
        <Route exact path = "/Connection" component = {Connection}/>
        <Route exact path = "/Admin" component = {Admin}/>
        <Route exact path = "/Edit/:editKey" component = {EditDeposit}/>
        <Route exact path = "/Forgot" component = {ForgetPass}/>
      </Switch>
    )
  }
}

export default App;
