import React, { Component } from 'react';
import {Thumbnail, Button} from 'react-bootstrap';
class Card extends Component{
    constructor(props) {
        super(props);
        this.state = {
          value: null,
          description:null, 
          image:null,
          dimension:null,
          button:null
        };
    }

    render(){
        return(
            <Thumbnail src={this.props.image} alt={this.props.dimension}>
                <h3>{this.props.value}</h3>
                <p>{this.props.description}</p>
                <p>
                <Button bsStyle="primary">Go</Button>
                </p>
            </Thumbnail>
        );
    }
}

export default Card;