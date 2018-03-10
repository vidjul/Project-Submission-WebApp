import React, { Component } from 'react';
import Nav from '../components/nav/Nav.js';
import Carousel from '../components/Carousel.js'
import Card from '../components/Card';
import {Row,Col} from 'reactstrap';
class Home extends Component {
  
  handleKeyChosen(key){
    if(key === "Student"){
      sessionStorage.setItem("Connected","True");
      sessionStorage.setItem("typePerson","3");
      window.location.reload();
    } else{
      sessionStorage.setItem("typePerson","4");
      this.props.history.push("/Deposit");
    }
  }
  
  render() {
    if(sessionStorage.getItem("Connected") == null){
      return (
          <div>
            <Nav />
            <Row>
              <Col xs={6} md={3}/>
              <Col xs={6} md={3}>
                <Card addKey={this.handleKeyChosen.bind(this)} value="Student" description="Connect to LeoID in order to look at projects." image="./student-with-graduation-cap.png" dimension="200x200"/>
              </Col>
              <Col xs={6} md={3}>
                <Card addKey={this.handleKeyChosen.bind(this)} value="Partner" description="Give a project to our students." image="./partner.png" dimension="200x200"/>
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