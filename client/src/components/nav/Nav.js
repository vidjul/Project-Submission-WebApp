import React, { Component } from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';


console.log("Passed");
class Nav extends Component {

	item = []

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
							<li><Link to ="/">Home</Link></li>
							<li><Link to="/Projects">Projects</Link></li>
							<li><Link to="/Deposit">Deposer un projet</Link></li>
							<li><a href="#">Works</a></li>
							<li><a href="#">News</a></li>
							<li><a href="#">Contact</a></li>
							<li>
								<Link to ="../../public/admin_3/page_user_login_5.html" className="btn btn-default btn-outline btn-circle collapsed">Sign in</Link>
							</li>
						</ul>
					</div>
      			</div>
    		</nav>
			
		);
	}
}
export default Nav;