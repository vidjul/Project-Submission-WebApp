import React from 'react';
import { CardFooter,  CardLink } from 'reactstrap';
import { Card, CardHeader, CardText, CardTitle } from 'material-ui/Card';
import { Container, Row, Col } from 'react-grid-system'
import { ListItem } from 'material-ui/List';
/**
 * Fast description of a project
 * use project props to set the project to display
 */
class ProjectCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            project: this.props.project,
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
            body: JSON.stringify({ "status": "validate", "editKey": null })
        }

        fetch("/api/projects/" + this.state.project._id, myInit)
            .then((res) => {
                window.location.reload();
            })
            .catch((err) => { console.log("Error occured : " + err) })
    }

    handleRejection(event) {
        var myInit = {
            method: 'PUT',
            mode: 'cors',
            headers: new Headers({ 'content-type': 'application/json' }),
            body: JSON.stringify({ "status": "refused" })
        }

        fetch("/api/projects" + this.state.project._id, myInit)
            .then((res) => {

            })
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
                <CardLink href="" onClick={this.handleRejection.bind(this)}>Refuser le projet</CardLink>
            </CardFooter>
        }
        return (
            <div>
                <Card style={{ borderBottom: 2 , marginBottom : 8}}>
                    <CardHeader
                        title={project.title}
                        subtitle={project.specialization}
                        actAsExpander={true}
                        showExpandableButton={true}
                        style={{ paddingLeft: 8, paddingTop: 8, paddingBottom: 0 }}
                    >
                           <label style = {{marginRight : 60}}> Année : {project.study_year.map((year)=> year + " ")} </label>
                           {project.partner ? (<label> Proposé par : {project.partner.company} </label>): ( "Non spécifié" )}
                        <hr />
                    </CardHeader>
                    <CardText expandable={true} style={{ marginBottom: 8 }}>
                        {project.description}
                    </CardText>
                    {adminFooter}
                </Card>
            </div>);
    }
}

export default ProjectCard;
