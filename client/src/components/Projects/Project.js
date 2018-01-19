import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import '../components.css'
class Project extends Component {
    render() {
    var project = this.props.project;
    var projectName = project.title;
      return (
        <div id="projectContent"className="container-flex border-bottom">
            <Link style = {{textDecoration:'none'}}to="/Projects">
                <div className="list-groupe-item border panel">
                <h5 className="mb-1 panel-header">{projectName}</h5>
                </div>

                <div className="mb-1 panel-content">{project.description}</div>
            </Link>
        </div>
      );
    }
  }

export default Project;
