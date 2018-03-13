import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,CardTitle, CardText, Container, CardBlock, Dropdown, DropdownToggle, DropdownItem, CardLink } from 'reactstrap';
import ProjectFilter from './ProjectFilter';

class ProjectCard extends React.Component{

    constructor(props){
        super(props);
        this.state = {project : this.props.project}
    }

    handleValidation(event){
        var myInit = {
            method: 'PUT',
            mode : 'cors',
            headers : new Headers({'content-type': 'application/json'}),
            body : JSON.stringify({"status" : "validate"})
        }

        fetch("/api/projects/"+this.state.project._id,myInit)
        .then((res) => {
            window.location.reload();
        })
        .catch((err) => {console.log("Error occured : "+err)})
    }

    render(){
        var project = this.props.project;
        let adminFooter = null;
        if(this.props.admin){
            adminFooter = <CardFooter className="text-muted">
            <CardLink href = "" onClick = {this.handleValidation.bind(this)}>Valider le projet</CardLink>
            </CardFooter>
        }
        return(
        <div>
            <Container>
                <Card>
                    <CardHeader>{project.specialization} - {project.title} :</CardHeader>
                    <CardBlock>{project.description}}</CardBlock>
                    {adminFooter}
                </Card>
            </Container>
        </div>);
    }
}

export default ProjectCard;
