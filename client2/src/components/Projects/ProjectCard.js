import React from 'react';
import { Card, CardHeader, CardText, CardTitle, CardActions } from 'material-ui/Card';
import { Container, Row, Col } from 'react-grid-system'
import { ListItem } from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton'
import Snackbar from 'material-ui/Snackbar';
import Dialog from 'material-ui/Dialog';
import ProjectComment from './ProjectComment'
/**
 * Fast description of a project
 * use project props to set the project to display
 */
class ProjectCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            project: this.props.project,
            modal_validation: false,
            full : this.props.full
        }
        this.handleValidation = this.handleValidation.bind(this)
        this.handleRejection = this.handleRejection.bind(this)
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
                window.location.reload()
            })
            .catch((err) => { console.log("Error occured : " + err) })
    }
    /**
         * Update the project and set the status to "refused"
         * @param {*} event 
         */
    handleRejection(event) {
        var myInit = {
            method: 'PUT',
            mode: 'cors',
            headers: new Headers({ 'content-type': 'application/json' }),
            body: JSON.stringify({ "status": "refused" })
        }

        fetch("/api/projects" + this.state.project._id, myInit)
            .then((res) => {
                window.location.reload()
            })
    }

    handleOpen = (e) => {
        console.log(e.target)
        this.setState({ modal_validation: true });
    }

    handleClose = () => {
        this.setState({ modal_validation: false });
    };

    render() {
        const actions = [
            <FlatButton
                label="Oui"
                primary={true}
                onClick={this.handleRejection}
            />,
            <FlatButton
                label="Non"
                secondary={true}
                keyboardFocused={true}
                onClick={this.handleClose}
            />,
        ];
        var project = this.props.project;
        let adminFooter = null;
        if (this.props.admin) { //If admin display the admin menu
            adminFooter = <CardActions>
                <FlatButton primary={true} onClick={this.handleValidation} label="Valider le projet" />
                <FlatButton secondary={true} onClick={this.handleOpen} label="Refuser le projet" />
                <Dialog
                    title="Etes vous sur de vouloir refuser ce projet ?"
                    actions={actions}
                    modal={false}
                    open={this.state.modal_validation}
                    onRequestClose={this.handleClose}
                >
                    The actions in this window were passed in as an array of React objects.
        </Dialog>
            </CardActions>
        }
        else
        {
            var userAction = {notfull :<ProjectComment project = {this.state.project}/> ,
            full : <div><p>Questions :</p><ProjectComment project = {this.state.project} full/> </div>}
            var userFooter =  this.state.full ? <CardActions> {userAction.full}</CardActions> : <CardActions> {userAction.notfull}</CardActions>
        }
        return (
            <div>
                <Card style={{ borderBottom: 2, marginBottom: 8 }}>
                    <CardHeader
                        title={project.title}
                        subtitle={<label>{project.majors_concerned} - Le : {project.edit_date}</label>}
                        actAsExpander={true}
                        showExpandableButton={true}
                        style={{ paddingLeft: 8, paddingTop: 8, paddingBottom: 0 }}
                    >
                        <label style={{ marginRight: 60 }}> Année : {project.study_year.map((year) => year + " ")} </label>
                        {project.partner ? (<label> Proposé par : {project.partner.company} </label>) : ("Non spécifié")}
                        <hr />
                    </CardHeader>
                    <CardText expandable={this.props.full ? false : true} style={{ marginBottom: 8 }}>
                        {project.description}
                        <hr />
                        <Container fluid>
                            <Row>
                                <Col>
                                    <label> Mots-clés : </label>
                                    {project.keywords ? (project.keywords.map(keyword => keyword + " ")) : ("Non spécifié")}
                                </Col>
                            </Row>
                        </Container>
                    </CardText>
                    {this.props.admin ? (adminFooter) : (userFooter)}
                    
                </Card>
            </div>);
    }
}

export default ProjectCard;
