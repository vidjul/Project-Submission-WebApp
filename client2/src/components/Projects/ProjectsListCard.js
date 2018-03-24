import React from 'react';
import { Button, ListGroup, CardFooter, CardBody, CardBlock, Dropdown, DropdownToggle, DropdownItem, ListGroupItem } from 'reactstrap';
import ProjectFilter from './ProjectFilter';
import ProjectCard from './ProjectCard';
import { Container, Row, Col } from 'react-grid-system'
import Paper from 'material-ui/Paper'
import { Card, CardHeader, CardText, CardTitle } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import CircularProgress from 'material-ui/CircularProgress';
class ProjectsListCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            projectToDisplay: [],
            projectSeen: [],
            annee_value: "",
            majeur_value: "",
            mots_cles_value: "",
            loaded : false    
        };
        this.styles = {
            header: {

            },
            title: {
                fontSize: 30 + 'px',
            }
        }
    }

    /**
     * A MODIFIE, FAIRE LE FILTRE VIA l'API
     */
    componentDidMount() {
        fetch('/api/projects')
            .then(res => res.json())
            .then(projects => {
                this.setState({ projects })
            })
            .then(res => {
                if (this.props.admin) {
                    var pendingProjects = this.state.projects.filter(project => { if (project.status == "pending") return true })
                    this.setState({ projectToDisplay: pendingProjects, loaded:true})
                    this.setState({ projectSeen: pendingProjects, loaded:true})
                }
                else {
                    var validateProjects = this.state.projects.filter(project => { if (project.status == "validate") return true })
                    this.setState({ projectToDisplay: validateProjects, loaded:true})
                    this.setState({ projectSeen: validateProjects, loaded:true})
                }
                console.log(this.state.projectToDisplay)
            })
            .catch((err) => { console.log("Error occured :" + err); });
    }

    handledropDownValue(dropDownValue, filterName) {
        if (filterName == "Année" && dropDownValue != "Majeure") {
            this.state.annee_value = dropDownValue != "Année" ? dropDownValue : "";
            console.log(this.state.annee_value);
        } if(filterName == "Majeure" && dropDownValue != "Année"){
            this.state.majeur_value = dropDownValue != "Majeure" ? dropDownValue : "";
            console.log(this.state.majeur_value);
        } 
        
        if(this.state.annee_value !== "" && this.state.annee_value !== null){
            var tmp = this.state.projectToDisplay.filter(project => { 
                if(project.study_year.length === 1 && project.study_year == this.state.annee_value){
                    return true;
                } if(project.study_year.length > 1 && project.study_year.includes(this.state.annee_value)){
                    return true; 
                }
            })
            this.setState({ projectSeen: tmp , loaded : true})
        }
        if(this.state.majeur_value !== "" && this.state.majeur_value !== null){
            var tmp = this.state.projectToDisplay.filter(project => { 
                if(project.majors_concerned.length === 1 && project.majors_concerned == this.state.majeur_value){
                    return true;
                } if(project.majors_concerned.length > 1 && project.majors_concerned.includes(this.state.majeur_value)){
                    return true;
                } 
            })
            this.setState({ projectSeen: tmp , loaded : true})
        }
}

    render() {
        console.log(this.state.annee_value);
        //console.log(this.state.projects);

        var ProjectList = null;
        if (this.props.admin) { //if asked as admin render pending project
            ProjectList = this.state.projectSeen.map(project =>
                    <Row debug>
                        <Col>
                            <ProjectCard key={project.id} project={project} admin />
                        </Col>
                    </Row>
            )
        }
        else { //render validate project
            ProjectList = this.state.projectSeen.map(project => 
                
                    <Row>
                        <Col>
                            <ProjectCard key={project.id} project={project} />
                        </Col>
            </Row> 
               )
        }

        const finished = this.state.loaded
        return (
        <div>
                <Container fluid>
                    <Row>
                        <Col>
                            <Card>
                                <CardTitle style={{ textAlign: 'center' }} title="Liste des projets"></CardTitle>
                                <hr />
                                <CardText style = {{backgroundColor : "#f7f4f4"}}>
                                    <ProjectFilter getdropDownValue={this.handledropDownValue.bind(this)} style={{ fontSize: 15 }} />

                                    <Container fluid>
                                        <List>
                                            {finished ? (ProjectList) : (<label style = {{margin : 'auto'}}><CircularProgress/></label>)}
                                        </List>
                                    </Container>
                                </CardText>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>);
    }
}

export default ProjectsListCard;
