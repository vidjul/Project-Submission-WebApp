import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
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

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {lng: 'en'}
    this.handleLngChange = this.handleLngChange.bind(this);
  }

	handleLngChange(event) {
    this.setState({lng: event.target.className.toLowerCase()});
	}

  render() {
    const lng = this.state.lng
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => (
            <Home lng={lng} handleLngChange={this.handleLngChange} />
          )} />
          <Route exact path="/Projects" component={Projects} />
          <Route exact path="/Deposit" component={Deposit} />
          <Route exact path="/Connection" component={Connection} />
          <Route exact path="/Admin" component={Admin} />
          <Route exact path="/Edit/:editKey" component={EditDeposit} />
          <Route exact path="/Forgot" component={ForgetPass} />
          <Route exact path="/Admin/Validation" component={ProjectValidation} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/protected" component={Protected} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
