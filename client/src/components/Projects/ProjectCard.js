import React from 'react';
import { Card, Collapse, ListGroupItem, ListGroup, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText, Container, CardBlock, Dropdown, DropdownToggle, DropdownItem, CardLink } from 'reactstrap';
import ProjectFilter from './ProjectFilter';

/**
 * Fast description of a project
 * use project props to set the project to display
 */
class ProjectCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            project: this.props.project,
            collapse: false
        }
    }

    /**
     * Update the project and set the status to "validate"
     * @param {*} event 
     */
    handleValidation(event) {
        var myInit = {
            method: 'PUT',
            mode: 'cors',
            headers: new Headers({ 'content-type': 'application/json' }),
            body: JSON.stringify({ "status": "validate" })
        }

        fetch("/api/projects/" + this.state.project._id, myInit)
            .then((res) => {
                window.location.reload();
            })
            .catch((err) => { console.log("Error occured : " + err) })
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        var project = this.props.project;
        let adminFooter = null;
        if (this.props.admin) { //If admin display the admin menu
            adminFooter = <CardFooter className="text-muted">
                <CardLink href="" onClick={this.handleValidation.bind(this)}>Valider le projet</CardLink>
            </CardFooter>
        }
        return (
            <div>
                <Container>
                    <Card>
                            <ListGroupItem action tag = "a" href ="#" onClick = {(e)=>{e.preventDefault()}}>
                                <CardHeader onClick={this.toggle.bind(this)}> {project.specialization} - {project.title} :</CardHeader>
                            </ListGroupItem>
                        <Collapse isOpen={this.state.collapse}>
                            <CardBlock>{project.description}}</CardBlock>
                        </Collapse>
                        {adminFooter}
                    </Card>
                </Container>
            </div>);
    }
}

export default ProjectCard;
