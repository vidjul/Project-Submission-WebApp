import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
	render() {
		return (
			<nav className="navbar navbar-default">
			<div className="container-fluid">
				<div className="navbar-header">
	  				<a className="navbar-brand" href="#">WebSiteName</a>
				</div>
				<ul className="nav navbar-nav">
					<li className="active"><a href="#">Home</a></li>
					<li><a href="#">Page 1</a></li>
					<li><a href="#">Page 2</a></li>
					<li><a href="#">Page 3</a></li>
				</ul>
  			</div>
			</nav>
		);}
}
export default Nav;