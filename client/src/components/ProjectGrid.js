import React, { Component } from 'react';
import Project from './Projects/Project';
import './components.css';
class ProjectGrid extends Component {

    constructor(){
        super();
        this.state = {projects : []};
    }

    componentDidMount() {
        fetch('/api/projects')
            .then(res => res.json())
            .then(projects => this.setState({ projects }));
    }

    render() {
        console.log(this.state.projects);
        return (
            <div class="container">
                <div class="panel panel-primary">
                    <div class="panel-heading">List of Projects</div>
                    <div class="panel-body">
                        <i class="fa fa-filter"></i> Filter by: 
                        <div class="dropdown">
                            <button class="btn btn-default dropdown-toggle" type="button" id="menu1" data-toggle="dropdown" multiple>Year   
                            <span class="caret"></span></button>
                            <ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
                                <li role="presentation"><a role="menuitem" tabindex="-1" href="#">A4</a></li>
                                <li role="presentation"><a role="menuitem" tabindex="-1" href="#">A5</a></li>
                            </ul>   
                        </div>

                        <div class="dropdown">
                            <button class="btn btn-default dropdown-toggle" type="button" id="menu1" data-toggle="dropdown" multiple>Major(s)    
                            <span class="caret"></span></button>
                            <ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
                                <li role="presentation"><a role="menuitem" tabindex="-1" href="#">IBO</a></li>
                                <li role="presentation"><a role="menuitem" tabindex="-1" href="#">IF</a></li>
                                <li role="presentation"><a role="menuitem" tabindex="-1" href="#">NE</a></li>
                                <li role="presentation"><a role="menuitem" tabindex="-1" href="#">MNM</a></li>
                            </ul>   
                        </div>

                        <div class="dropdown">
                            <button class="btn btn-default dropdown-toggle" type="button" id="menu1" data-toggle="dropdown" multiple>Keywords     
                            <span class="caret"></span></button>
                            <ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
                                <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Big Data</a></li>
                                <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Developpement web</a></li>
                                <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Blockchain</a></li>
                                <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Developpement mobile</a></li>
                            </ul>   
                        </div>
                        <br/>
                        {this.state.projects.map(project => <Project key = {project.id}project = {project}/>)}
                    </div>             
                </div>
            </div>
        );
    }
}

export default ProjectGrid;
