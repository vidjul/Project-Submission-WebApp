import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import '../components.css'
class Project extends Component {
  render() {
    var project = this.props.project;
    return (
      <Link style={{ textDecoration: 'none' }} to="/Projects">
        <div class="panel panel-default">
          <div class="panel-heading">{project.specialization} - {project.title} :</div>
          <div class="panel-body">{project.description}</div>
        </div>
      </Link>
    );
  }
}

export default Project;
