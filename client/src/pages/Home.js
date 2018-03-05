import React, { Component } from 'react';
import './Index.css';
import Nav from '../components/nav/Nav.js';
import Carousel from '../components/Carousel.js'
import '../components/components.css';
class Home extends Component {

  render() {
    return (
      <div>
        <Nav />
        <Carousel />
      </div>
    );
  }
}

export default Home;
