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

		
        			<div className="collapse navbar-collapse" id="navbar-collapse-2">
						<ul className="nav navbar-nav navbar-right">
							<li><a href="#">Home</a></li>
							<li><a href="#">About</a></li>
							<li><a href="#">Services</a></li>
							<li><a href="#">Works</a></li>
							<li><a href="#">News</a></li>
							<li><a href="#">Contact</a></li>
							<li>
								<a className="btn btn-default btn-outline btn-circle collapsed" data-toggle="collapse" href="#nav-collapse2" aria-expanded="false" aria-controls="nav-collapse2">Sign in</a>
							</li>
						</ul>
						<div className="collapse nav navbar-nav nav-collapse slide-down" id="nav-collapse2">
							<form className="navbar-form navbar-right form-inline" role="form">
								<div className="form-group">
									<label className="sr-only" for="Email">Email</label>
									<input type="email" className="form-control" id="Email" placeholder="Email" autofocus required />
								</div>
								<div className="form-group">
									<label className="sr-only" for="Password">Password</label>
									<input type="password" className="form-control" id="Password" placeholder="Password" required />
								</div>
								<button type="submit" className="btn btn-success">Sign in</button>
							</form>
						</div>
					</div>
      			</div>
    		</nav>
		);
	}
}
export default Nav;