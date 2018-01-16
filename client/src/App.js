import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav/Nav.js';
import Element1 from './components/element1/Element1.js';
import Element2 from './components/element1/Element2.js';
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

        <div className = "container">
          <div className="row">
            <Element1/>
            <Element2/>
          </div>
        </div>

          <h1>Tasks</h1>
          {this.state.tasks.map(user =>
            <div key={user.id}>{user.name}</div>
          )}
        </div>
      );
    }
  }

export default App;
