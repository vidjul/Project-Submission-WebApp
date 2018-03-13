import React, { Component } from 'react';
import Navs from '../components/nav/Navs.js';
import ProjectsListCard from '../components/Projects/ProjectsListCard';
export default class ProjectValidation extends Component {
    render() {
        return (
            <div>
                <Navs/>
                <ProjectsListCard admin/>
            </div>
        )
    }
}