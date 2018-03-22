import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import ProjectCard from './ProjectCard';
import { Container, Row, Col } from 'react-grid-system';
import { List, ListItem } from 'material-ui/List';
import CommunicationComment from 'material-ui/svg-icons/communication/comment';
export default class ProjectComment extends React.Component {
    state = {
        open: false,
        project: this.props.project,
        full: this.props.full,
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    render() {
        let comment;
        let response = [<ListItem key={1} primaryText="Via le site web" />,<ListItem key={2} primaryText="Merci !" />]

        if (this.state.full) {
            comment = <Container fluid>
                <Row>
                    <Col>
                        <List>
                            <ListItem primaryText="Comment candidater a votre projet ?"
                            nestedItems = {response}
                            leftIcon={<CommunicationComment/>}/>
                        </List>
                    </Col>
                </Row>
            </Container>

        }
        else {
            comment = <div>
                <FlatButton label="2 commentaires" onClick={this.handleOpen} />
                <Dialog
                    title={this.state.project.title}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    contentStyle={{ width: '90%', maxWidth: 'none' }}>
                    <ProjectCard project={this.state.project} full />
                </Dialog>
            </div>
        }
        return (
            comment
        )
    }
}