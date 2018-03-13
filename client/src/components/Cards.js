import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText,CardSubtitle, CardBody } from 'reactstrap';

class Cards extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          choice: null,
        };
    }
    render(){
        return(
            <Card className="text-center">
                <CardImg top width="100%" src={this.props.image} alt="Card image cap" />
                <CardBody>
                <CardTitle className="h2">{this.props.value}</CardTitle>
                <CardSubtitle className="h3">{this.props.titre}</CardSubtitle>
                <CardText className="lead">{this.props.description}</CardText>
                <Button size="lg">Button</Button>
                </CardBody>
            </Card>
        );
    } 
}

export default Cards;