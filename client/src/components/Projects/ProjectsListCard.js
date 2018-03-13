import React from 'react';
import { Card, Button, ListGroup, CardHeader, CardFooter, CardBody, CardTitle, CardText, Container, CardBlock, Dropdown, DropdownToggle, DropdownItem, ListGroupItem } from 'reactstrap';
import ProjectFilter from './ProjectFilter';
import ProjectCard from './ProjectCard';

class ProjectsListCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { projects: [], projectToDisplay: [] };
    }

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
            .catch((err) => { console.log("Error occured :"+err); });
    }

    com

    render() {
        console.log(this.state.projects);
        let ProjectList = null;
        if(this.props.admin){ //if asked as admin render pending project
            ProjectList = this.state.projectToDisplay.map(project => <Container><ProjectCard key={project.id} project={project} admin/></Container>)
        }
        else { //render validate project
            ProjectList = this.state.projectToDisplay.map(project => <Container><ProjectCard key={project.id} project={project}/></Container>)
        }
        return (
            <div>
                <Container>
                    <Card className="lead">
                        <CardHeader style={{ fontSize: 20 }} >Liste des projets</CardHeader>
                        <CardBlock>
                            <Container><ProjectFilter style={{ fontSize: 15 }} /></Container><hr />
                            <ListGroup>
                            {ProjectList}
                            </ListGroup>
                            </CardBlock>
                    </Card>
                </Container>
            </div>);
    }
}

export default ProjectsListCard;
