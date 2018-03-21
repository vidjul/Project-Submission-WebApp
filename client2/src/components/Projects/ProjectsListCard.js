import React from 'react';
import { Button, ListGroup, CardFooter, CardBody, CardBlock, Dropdown, DropdownToggle, DropdownItem, ListGroupItem } from 'reactstrap';
import ProjectFilter from './ProjectFilter';
import ProjectCard from './ProjectCard';
import { Container, Row, Col } from 'react-grid-system'
import Paper from 'material-ui/Paper'
import { Card, CardHeader, CardText, CardTitle } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';

class ProjectsListCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            projectToDisplay: [],
            annee_value: "",
            majeur_value: ""
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
                    this.setState({ projectToDisplay: pendingProjects })
                }
                else {
                    var validateProjects = this.state.projects.filter(project => { if (project.status == "validate") return true })
                    this.setState({ projectToDisplay: validateProjects })
                }
                console.log(this.state.projectToDisplay)
            })
            .catch((err) => { console.log("Error occured :" + err); });
    }

    handledropDownValue(dropDownValue, filterName) {
        if (filterName == "Année" && dropDownValue != "Majeure") {
            this.state.annee_value = dropDownValue != "Année" ? dropDownValue : "";
        } if (filterName == "Majeure" && dropDownValue != "Année") {
            this.state.majeur_value = dropDownValue != "Majeure" ? dropDownValue : "";
        }
        console.log(this.state.annee_value);

    }

    render() {
        console.log(this.state.projects);
        let ProjectList = null;
        if (this.props.admin) { //if asked as admin render pending project
            ProjectList = this.state.projectToDisplay.map(project =>
                <ListItem>
                    <Row debug>
                        <Col>
                            <ProjectCard key={project.id} project={project} admin />
                        </Col>
                    </Row>
                </ListItem >
            )
        }
        else { //render validate project
            ProjectList = this.state.projectToDisplay.map(project =>
                
                    <Row>
                        <Col>
                            <ProjectCard key={project.id} project={project} />
                        </Col>
                    </Row>
               )
        }

        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col>
                            <Card>
                                <CardTitle style={{ textAlign: 'center' }} title="Liste des projets"></CardTitle>
                                <hr />
                                <CardText>
                                    <ProjectFilter getdropDownValue={this.handledropDownValue.bind(this)} style={{ fontSize: 15 }} />

                                    <Container fluid>
                                        <List>
                                        {ProjectList}
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
