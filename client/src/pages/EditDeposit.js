import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

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
                this.setState({description: event.target.value});
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
        return (
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
        )

    }
}

export default Edit;