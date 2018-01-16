import React, { Component } from 'react';
import './Element1.css';
class Element1 extends Component {
	render() {
		return (
            //Zone principale prend 8colonnes pour medium device (<2000px)
			<div className="col-md-8 element1">
				<h2>Zone principale - élément 1</h2> 
            </div> 
		);}
}
export default Element1;