import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Paper from 'material-ui/Paper';
import { Container, Row, Col } from 'react-grid-system';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';

/**
 * Edit project page
 */
class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch(`/api/edit/${this.props.match.params.editKey}`)
            .then((response) => response.json())
            .then((json) => this.setState(json))
            .catch((err) => this.setState({ invalid: true }));
    }

    /**
     * Put request to the server to update the component state
     */
    handleSubmit() {
        console.log(`/api/projects/${this.state._id}`);
        console.log(JSON.stringify(this.state));
        fetch(`/api/projects/${this.state._id}`, {
            method: 'PUT',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res;
        }).catch(err => console.log(err));

    }

    handleChange(event) {
        switch (event.target.name) {
            case "title":
                this.setState({ title: event.target.value });
                break;
            case "description":
                this.setState({ description: event.target.value });
                break;
        }
    }

    render() {
        if (this.state.project === {}) {
            return (
                <div>Please wait</div>
            );
        }
        if (this.state.invalid) {
            return (
                <div>Invalid URL</div>
            );
        }
        console.log(this.state)
        let a = (key) => {
            if(this.state.study_year){
                console.log(this.state.study_year)
                return this.state.study_year.includes(key)
            }
        }
        return (
            <Container fluid>
                <Col md={10} offset={{ md: 1 }}>

                    <Paper style={{ marginTop: 20 }}>
                        <Row>
                            <p style={{ fontSize: 30, width: 100 + "%", textAlign: 'center' }}>Modifiez votre projet</p>
                        </Row>
                        <form>
                            <Row>
                                <Col md={4} offset={{ md: 4 }}>
                                    <TextField value={this.state.title} floatingLabelText="Nom du projet" fullWidth />
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col md={2} offset={{ md: 4 }}>
                                    <Checkbox
                                        label= "4A"
                                        name="year"
                                        value="A4"
                                        onCheck={this.handleChange}
                                        defaultChecked = {a("A4")} />
                                </Col>
                                <Col md={2}>
                                    <Checkbox
                                        label= "5A"
                                        name="year"
                                        value="5A"
                                        onCheck={this.handleChange}
                                        defaultChecked = {a("A5")} />
                                </Col>
                            </Row>
                        </form>
                        <Form>
                            <FormGroup>
                                <Label for="title">Title</Label>
                                <Input type="text" name="title" id="title" placeholder="Enter a title" value={this.state.title} onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="description">Description</Label>
                                <Input type="textarea" name="description" id="description" value={this.state.description} onChange={this.handleChange} />
                            </FormGroup>
                            <Button onClick={this.handleSubmit}>Submit</Button>
                        </Form>
                    </Paper>

                </Col>
            </Container>
        )

    }
}

export default Edit;