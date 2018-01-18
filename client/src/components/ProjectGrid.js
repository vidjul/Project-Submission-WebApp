import React, { Component } from 'react';
import Project from './Projects/Project';
class ProjectGrid extends Component {

    constructor(){
        super();
        this.state = {projects : []};
    }

    componentDidMount() {
        fetch('/api/Projects').then(response => response.json).then(({results: projects}) => this.setState(projects));
    }

    render() {
        console.log(this.state.projects);
        return (
                <div className="container-fluid row">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                        <h3>  <p className = "text-center"> Liste des projets publies ! </p> </h3>
                    </div>
                        <div className="panel-content">
                            <div className = "list-group">
                                {this.state.projects.map(project => 
                                    <Project key={project.id} project={project}/>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default ProjectGrid;
