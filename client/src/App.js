import React, { Component } from 'react';
import {Route, Switch} from "react-router";
import Home from './pages/Home';
import Projects from './pages/Projects';
class App extends Component {
  render() {
    return (
      <Switch>
       <Route exact path = "/" component = {Home}/>
       <Route exact path = "/Projects" component = {Projects}/>
       </Switch>
    )
  }
}

export default App;
