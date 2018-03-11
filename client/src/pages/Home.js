import React, { Component } from 'react';
import './Index.css';
import Navs from '../components/nav/Navs.js';
import JumbotronPULV from '../components/JumbotronPULV.js';
import Carousel from '../components/Carousel.js'
import '../components/components.css';
import Cards from '../components/Cards';
import {Row,Col} from 'react-bootstrap';
import JumbotronPresentation from '../components/JumbotronPresentation';

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
    return (
      <div>
        <Navs />
        <JumbotronPresentation />
        <JumbotronPULV />
        <Carousel />
      </div>
    );  
  }
}

export default Home;