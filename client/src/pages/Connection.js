import React, { Component } from 'react';
import Navs from '../components/nav/Navs.js';
import Cards from '../components/Cards';
import {CardDeck} from 'reactstrap';

class Connection extends Component {
  
  handleKeyChosen(key){
    if(key === "Student"){
      sessionStorage.setItem("Connected","True");
      sessionStorage.setItem("typePerson","3");
      this.props.history.push("/");
    } else{
      sessionStorage.setItem("typePerson","4");
      this.props.history.push("/Deposit");
    }
  }
  
  render() {
    if(sessionStorage.getItem("Connected") == null){       
      return(
        <div>
          <Navs />
          <CardDeck>
              <Cards addKey={this.handleKeyChosen.bind(this)} value="Student" description="Connect to LeoID in order to look at projects." image="./student-with-graduation-cap.png"/> 
              <Cards addKey={this.handleKeyChosen.bind(this)} value="Partner" description="Give a project to our students." image="./partner.png"/>
              <Cards addKey={this.handleKeyChosen.bind(this)} value="Staff" description="Manage the projects." image="./staff.png"/>
              <Cards />
          </CardDeck>
        </div>  
      );
    } 
    else{
      return(
        <div>
          <Navs />
          Connecté
        </div>
      );
    } 
  }
}

export default Connection;