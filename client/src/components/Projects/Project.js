import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
class Project extends Component {
    render() {
    var project = this.props.project;
    var projectName = project.title;
      return (
        <div className="container-flex">
            <Link style = {{textDecoration:'none'}}to="/Projects">
                <div className="list-groupe-item border panel">
                <h5 className="mb-1 panel-header">{projectName}</h5>
                </div>

                <div className="panel-content">{project.description}</div>
            </Link>
        </div>
      );
    }
  }

export default Project;
