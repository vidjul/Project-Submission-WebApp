import React, { Component } from 'react';
import Project from './Projects/Project';
class ProjectGrid extends Component {

    constructor(){
        super();
        this.state = { projects: [] };
    }

    componentDidMount() {
        fetch('/api/projects')
            .then(res => res.json())
            .then(projects => this.setState({ projects }));
    }

    render() {
        return (
            <row>
                <div className="container-fluid">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                        <p className = "text-center"><h3> Liste des projets publies ! </h3></p> 
                    </div>
                        <div className="panel-content">
                            <div className = "list-group"> 
                                {this.state.projects.map(project =>
                                    <ul>
                                        <li key={project.id}>{project.title}</li>
                                        <li key={project.id}>{project.description}</li>
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </row>
        );
    }
}

export default ProjectGrid;
