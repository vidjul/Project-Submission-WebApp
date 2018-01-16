import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav/Nav.js';

class App extends Component {
  state = {tasks: []}
  
    componentDidMount() {
      fetch('/tasks')
        .then(res => res.json())
        .then(tasks => this.setState({ tasks }));
    }
  
    render() {
      return (
        <div>
        <Nav/>
          <h1>Tasks</h1>
          {this.state.tasks.map(user =>
            <div key={user.id}>{user.name}</div>
          )}
        </div>
      );
    }
  }

export default App;
