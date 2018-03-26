import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import ProjectCard from './ProjectCard';
import { Container, Row, Col } from 'react-grid-system';
import { List, ListItem } from 'material-ui/List';
import CommunicationComment from 'material-ui/svg-icons/communication/comment';
import TextField from 'material-ui/TextField';
export default class ProjectComment extends React.Component {
    state = {
        open: false,
        project: this.props.project,
        comments: this.props.project.comments,
        projectCardOpen: this.props.projectCardOpen,
        question: ''
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: [e.target.value] })
    }

    handleSendQuestion = (e) => {
        var question = this.state.question
        var userId = "5a6d011d063609d47c70fdda";
        var idProject = this.state.project._id
        var body = {
            content: question,
            projectId: idProject,
            userId: userId
        }
        fetch(`api/projects/${idProject}/comments`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
            .then((res) => { console.log(res) })
            .catch((err) => { console.log(err) })
    }
    render() {
        console.log(this.state.comments.length)
        let comment;
        let response = [<ListItem key={1} primaryText="Via le site web" />, <ListItem key={2} primaryText="Merci !" />]

        if (this.state.projectCardOpen) {
            comment = <Container fluid>
                <Row>
                    <Col>
                        <List>
                            {this.state.project.comments.map(comment =>
                                <ListItem primaryText={comment.content}
                                    nestedItems={response}
                                    leftIcon={<CommunicationComment />} />)}

                        </List>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <form onSubmit={this.handleSendQuestion.bind(this)}>
                            <label style={{ marginRight: 50 }}>Posez votre question : </label><TextField floatingLabelText="Posez une question !" name="question" onChange={this.handleChange.bind(this)} />
                            <RaisedButton type='submit' secondary={true} label="envoyer" style={{ width: 75, height: 25, marginLeft: 25 }} />
                        </form>
                    </Col>
                </Row>
            </Container>

        }
        else {
            comment = <div>
                <FlatButton label={this.state.comments.length + " commentaires"} onClick={this.handleOpen} />
                <Dialog
                    title={this.state.project.title}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}
                    contentStyle={{ width: '90%', maxWidth: 'none' }}>
                    <ProjectCard project={this.state.project} projectCardOpen />
                </Dialog>
            </div>
        }
        return (
            comment
        )
    }
}