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

            <a href="javascript:;" class="popovers" data-container="body" data-trigger="hover" data-content="Popover body goes here! Popover body goes here!" data-original-title="Another Popover">
                                                            trigger me on hover </a>
            
            </Link>
        </div>
      );
    }
  }

export default Project;
