import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap';
import { Redirect } from 'react-router-dom';

class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            choice: null,
            redirect: false
        };
    }

    onClick(event) {
        this.setState({ redirect: true });
    }

    renderRedirect() {
        if (this.state.redirect) {
            return <Redirect to={this.props.path} />
        }
    }

    render() {
        return (
            <Card className="text-center">
                {this.renderRedirect()}
                <CardImg top width="100%" src={this.props.image} alt="Card image cap" />
                <CardBody>
                    <CardTitle className="h2">{this.props.value}</CardTitle>
                    <CardSubtitle className="h3">{this.props.titre}</CardSubtitle>
                    <CardText className="lead">{this.props.description}</CardText>
                    <Button onClick={this.onClick.bind(this)} size="lg">Button</Button>
                </CardBody>
            </Card>
        );
    }
}

export default Cards;