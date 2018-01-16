import React, { Component } from 'react';
import './Element1.css';
class Element2 extends Component {
	render() {
		return (
            //Zone principale prend 2colonnes pour medium device (<2000px)
			<div className="col-md-2 element2">
				<h2>Zone principale - élément 2</h2> 
            </div> 
		);}
}
export default Element2;