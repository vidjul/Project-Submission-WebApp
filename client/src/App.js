import React, { Component } from 'react';
import {Route, Switch} from "react-router";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Deposit from './pages/Deposit';
class App extends Component {
  render() {
    return (
      <Switch>
       <Route exact path = "/" component = {Home}/>
       <Route exact path = "/Projects" component = {Projects}/>
       <Route exact path = "/Deposit" component = {Deposit}/>
       </Switch>
    )
  }
}

export default App;
