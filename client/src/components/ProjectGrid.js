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
                <div className="container centered">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                        <p className = "text-center"><h3> Liste des projets publies ! </h3></p> 
                    </div>
                        <div className="panel-content">
                            <div className = "list-group"> 
                                {this.state.projects.map(project =>
                                    <Project key = {project.id}project = {project}/>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default ProjectGrid;
