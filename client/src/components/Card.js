import React, { Component } from 'react';
import {Thumbnail, Button} from 'react-bootstrap';
class Card extends Component{
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
            <form onSubmit={this.handleSubmit}>
            <Thumbnail href = {this.props.link} src={this.props.image} alt={this.props.dimension}>
                <h3>{this.props.titre}</h3>
                <p>{this.props.description}</p>
                <p>
                <Button type="submit" bsStyle="primary">Go</Button>
                </p>
            </Thumbnail></form>
        );
    } 
}

export default Card;