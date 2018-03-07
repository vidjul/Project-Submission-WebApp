import React, { Component } from 'react';
import {Redirect} from 'react-router';
import './Index.css';
import Nav from '../components/nav/Nav.js';
import { Link } from 'react-router';
import ProjectGrid from '../components/ProjectGrid';
import Carousel from '../components/Carousel.js'
class Projects extends Component {

    render() {
        if(sessionStorage.getItem("Connected") === null){
            return(<Redirect to='/'/>); 
        } else {
            return (
                <div>
                    <Nav />
                    <ProjectGrid />
                    <Carousel />
                </div>
            );
        }
    }
}

export default Projects;
