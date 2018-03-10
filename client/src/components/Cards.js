import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText,CardSubtitle, CardBody } from 'reactstrap';

class Cards extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          choice: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.addKey(this.props.value);
    }
    render(){
        return(
            <Card className="text-center">
                <CardImg top width="100%" src={this.props.image} alt="Card image cap" />
                <CardBody>
                <CardTitle>{this.props.value}</CardTitle>
                <CardSubtitle>{this.props.titre}</CardSubtitle>
                <CardText>{this.props.description}</CardText>
                <Button>Button</Button>
                </CardBody>
            </Card>
        );
    } 
}

export default Cards;