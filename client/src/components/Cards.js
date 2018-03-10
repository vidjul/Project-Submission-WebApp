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
            <Card>
                <CardImg top width="100%" src={this.props.image} alt="Card image cap" />
                <CardBody>
                <CardTitle>{this.props.titre}</CardTitle>
                <CardSubtitle></CardSubtitle>
                <CardText className="text-center">{this.props.description}</CardText>
                <Button>Button</Button>
                </CardBody>
            </Card>
        );
    } 
}

export default Cards;