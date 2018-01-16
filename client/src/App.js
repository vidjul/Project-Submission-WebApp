import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav/Nav.js';
import Element1 from './components/element1/Element1.js';
import Element2 from './components/element1/Element2.js';
class App extends Component {
  state = {users: []}
  
    componentDidMount() {
      fetch('/tasks')
        .then(res => res.json())
        .then(users => this.setState({ users }));
    }
  
    render() {
      return (
        <div>
        <Nav/>

        <div className = "container">
          <div className="row">
            <Element1/>
            <Element2/>
          </div>
        </div>

          <h1>Tasks</h1>
          {this.state.users.map(user =>
            <div key={user.id}>{user.name}</div>
          )}
        </div>
      );
    }
  }

export default App;
