import React, { Component } from 'react';
import {Route, Switch} from "react-router";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Deposit from './pages/Deposit';
import Admin from './pages/Admin';
class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route exact path = "/Projects" component = {Projects}/>
        <Route exact path = "/Deposit" component = {Deposit}/>
        <Route exact path = "/Admin" component = {Admin}/>
      </Switch>
    )
  }
}

export default App;
