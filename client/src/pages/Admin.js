import React, { Component } from 'react';
import Nav from '../components/nav/Nav.js';
import Card from '../components/Card';
import { Row, Col } from 'react-bootstrap';
import {Route} from 'react-router';
import {Redirect} from 'react-router';
import Home from './Home';
class Admin extends Component {

    constructor(props){
        super(props)
        var redirect = new Map();
        redirect.set("Validation",false);
        redirect.set("EditHome",false);
        this.state = {
            myRedirects : redirect
        }
        this.handleRedirection.bind(this)
    }
    

    handleRedirection = (value) => {
        console.log(value);
        this.setState(this.state.myRedirects.set(value,true))
    }

    render() {
        const redirects = this.state.myRedirects
        for(var [key,value] of redirects){
            console.log(redirects.get(key,value))
            if(value){
                return (
                    <div>
                    <Redirect to = '/'/>
                    </div>
                )
            }
        }
        return (
            <div>
                <Nav />
                <Row>
                    <Col xs={6} md={3}>
                        <Card
                            titre = "Valider un projet"
                            image='./project_validation.png'
                            dimension='200x200'
                            value = 'Validation' 
                            description = "Voir la liste des projets en attente de validation."
                            addKey = {this.handleRedirection}
                            />
                    </Col>
                    <Col xs={6} md={3}>
                        <Card
                            titre = "Modifier la home page"
                            image='./Update_home.png'
                            dimension='200x200'
                            value = 'EditHome' 
                            description = "Modifier la page d'accueil du site."
                            addKey = {this.handleRedirection}
                            />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Admin;