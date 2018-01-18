import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
class Project extends Component {
    render() {
    var project = this.props.project;
    var projectName = project.title;
      return (
        <div>
            <Link path="/Projects">
                <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{projectName}</h5>
                </div>
            </Link>
        </div>
      );
    }
  }

export default Project;
