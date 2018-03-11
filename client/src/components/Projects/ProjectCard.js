import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,CardTitle, CardText, Container, CardBlock, Dropdown, DropdownToggle, DropdownItem } from 'reactstrap';
import ProjectFilter from './ProjectFilter';

class ProjectCard extends React.Component{
    render(){
        var project = this.props.project;
        return(
        <div>
            <Container>
                <Card>
                    <CardHeader>{project.specialization} - {project.title} :</CardHeader>
                    <CardBlock>{project.description}}</CardBlock>
                </Card>
            </Container>
        </div>);
    }
}

export default ProjectCard;
