import React, { Component } from 'react';
import './Index.css';
import Nav from '../components/nav/Nav.js';
import Carousel from '../components/Carousel.js'
import '../components/components.css';
import Card from '../components/Card';
import {Row,Col} from 'react-bootstrap';
class Home extends Component {
  render() {
    sessionStorage.setItem("Connected","false");
    if(sessionStorage.getItem("Connected") == "false"){
      return (
          <div>
            <Nav />
            <Row>
              <Col xs={6} md={3}/>
              <Col xs={6} md={3}>
                <Card value="Student" description="Connect to LeoID in order to look at projects." image="./student-with-graduation-cap.png" dimension="200x200"/>
              </Col>
              <Col xs={6} md={3}>
                <Card value="Partner" description="Give a project to our students." image="./partner.png" dimension="200x200"/>
              </Col>
            </Row>
          </div>
        
      );
    } else{
      return (
        <div>
          <Nav />
          <Carousel />
        </div>
      );
    }
  }
}

export default Home;