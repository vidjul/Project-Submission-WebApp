import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
	render() {
		return (
			<nav className="navbar navbar-default">
				<div className="container">
					<div className="navbar-header">
						<a className="navbar-brand " href="#">
						<img id="logo" src="/logo.png" width="30" height="30" className="mr-1" alt=""/>
						Bienvenue sur notre plateforme !</a>
					</div>

		
        			<div className="" id="navbar-collapse-2">
						<ul className="nav navbar-nav navbar-right">
							<li><a href="#">Home</a></li>
							<li><a href="#">About</a></li>
							<li><a href="#">Services</a></li>
							<li><a href="#">Works</a></li>
							<li><a href="#">News</a></li>
							<li><a href="#">Contact</a></li>
							<li>
								<a className="btn btn-default btn-outline btn-circle collapsed">Sign in</a>
							</li>
						</ul>
					</div>
      			</div>
    		</nav>
		);
	}
}
export default Nav;