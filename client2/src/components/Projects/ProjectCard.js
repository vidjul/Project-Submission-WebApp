import React from 'react';
import { Card, CardHeader, CardText, CardTitle, CardActions } from 'material-ui/Card';
import { Container, Row, Col } from 'react-grid-system'
import { ListItem } from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton'
import Snackbar from 'material-ui/Snackbar';
import Chip from 'material-ui/Chip';
import Dialog from 'material-ui/Dialog';
import ProjectComment from './ProjectComment';
import i18n from '../i18n';
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
            projectCardOpen: this.props.projectCardOpen,
            //lng: 'en'
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
        var majors = project.majors_concerned.map((major => major + " "))

        const lng = this.props.lng;

        /**
         * ADMIN FOOTER ---------------------
         */
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
        </Dialog>
            </CardActions>
            /**
             * -----------------------------
             * USER FOOTER
             */
            
        }
        else {
            var userAction = {
                notprojectCardOpen: <ProjectComment project={this.state.project} lng={lng} />,
                projectCardOpen: <div><p>Questions :</p><ProjectComment project={this.state.project} lng={lng} projectCardOpen /> </div>
            }
            var userFooter = this.state.projectCardOpen ? <CardActions> {userAction.projectCardOpen}</CardActions> : <CardActions> {userAction.notprojectCardOpen}</CardActions>
        }

        var files = null;
        if(this.state.project.media_files[0] !== undefined && this.state.project.media_files[0].filename !== undefined){
            files = <Row>
            <Col>
                <label> Files : </label>
                {project.media_files.map(file => <img src={file.destination + file.filename+".PNG"} />)}
            </Col>
        </Row>
        }
        
        return (
            <div>
                <Card style={{ borderBottom: 2, marginBottom: 8 }}>
                    <CardHeader
                        title={project.title}
                        subtitle={<label>{majors} - Le : {project.edit_date}</label>}
                        actAsExpander={true}
                        showExpandableButton={true}
                        style={{ paddingLeft: 8, paddingTop: 8, paddingBottom: 0 }}
                    >
                        <label style={{ marginRight: 60 }}> {i18n.t('year.label', {lng})}: {project.study_year.map((year) => year + " ")} </label>
                        {project.partner ? (<label> {i18n.t('partner.label', {lng})} : {project.partner.company} </label>) : ("Non spécifié")}
                        <hr />
                    </CardHeader>
                    <CardText expandable={this.props.projectCardOpen ? false : true} style={{ marginBottom: 8 }}>
                        {project.description}
                        <hr />
                        <Container fluid>
                            <Row>
                                <Col>
                                    <label> {i18n.t('keywords.label', {lng})} : </label>
                                    {project.keywords ? (<Row>   {project.keywords.map(keyword =>
                                        <Chip style={{margin : 4}} >
                                            {keyword}
                                         </Chip>)}</Row>) : ("Non spécifié")}
                                </Col>
                            </Row>
                            {files}
                        </Container>
                    </CardText>
                    {this.props.admin ? (adminFooter) : (userFooter)}

                </Card>
            </div>);
    }
}

export default ProjectCard;
