import React, { Component } from 'react';
import { Route, Router, Switch, BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Deposit from './pages/Deposit';
import Connection from './pages/Connection';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Protected from './pages/Protected';
import EditDeposit from './pages/EditDeposit';
import ForgetPass from './pages/ForgetPass';
import ProjectValidation from './pages/ProjectValidation';
import Nav from './components/nav/Navs'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { lng: 'fr' }
    this.handleLngChange = this.handleLngChange.bind(this);
  }

  handleLngChange(event) {
    this.setState({ lng: event.target.className.toLowerCase() });
  }

  render() {
    const lng = this.state.lng
    return (
      <BrowserRouter>
        <div>
          <Nav lng={lng} handleLngChange={this.handleLngChange} />
          <Switch>
            <Route exact path="/" render={() => (<Home lng={lng} />)} />
            <Route exact path="/Projects" render={() => (<Projects lng={lng} />)} />
            <Route exact path="/Deposit" render={() => (<Deposit lng={lng} />)} />
            <Route exact path="/Connection" render={() => (<Connection lng={lng} />)} />
            <Route exact path="/Admin" render={() => (<Admin lng={lng} />)} />
            <Route exact path="/Edit/:editKey" render={() => (<EditDeposit lng={lng} />)}/>
            <Route exact path="/Forgot" render={() => (<ForgetPass lng={lng} />)}/>
            <Route exact path="/Admin/Validation" render={() => (<ProjectValidation lng={lng} />)}/>
            <Route exact path="/login" render={() => (<Login lng={lng} />)}/>
            <Route exact path="/protected" render={() => (<Protected lng={lng} />)}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
