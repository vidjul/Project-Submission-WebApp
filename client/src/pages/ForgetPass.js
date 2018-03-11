import React, { Component } from 'react';
import Navs from '../components/nav/Navs.js';
import { Form, FormGroup, Button, Input, Label } from 'reactstrap';

class ForgetPass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: ""
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const form = {
            email: this.state.email
        }

        try {
            fetch('/api/retrieveEdit', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form)
            })
                .then((res) => {
                    console.log(res)
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        catch (error) {
            console.error(error);
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
            <Navs/>
            <Form onSubmit={this.handleSubmit.bind(this)}>
                <FormGroup>
                    <Label for="Email"><h3>Votre email</h3></Label>
                    <Input
                        onChange={this.handleChange}
                        type="email" name="email2"
                        placeholder="Votre email" />
                </FormGroup>
                <FormGroup>
                    <Button>Envoyer le projet</Button>
                </FormGroup>
            </Form>
            </div>
        )
    }
}

export default ForgetPass;