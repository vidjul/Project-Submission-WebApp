import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav/Nav.js';
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

          <h1>Tasks</h1>
          {this.state.users.map(user =>
            <div key={user.id}>{user.name}</div>
          )}
        </div>
      );
    }
  }

export default App;
