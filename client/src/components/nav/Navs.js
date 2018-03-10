import React from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';


console.log("Passed");
class Navs extends React.Component {
	render() {
		return (
				<Nav>
					<NavItem>
						<img src="./logo_pulv.png" />
					</NavItem>
					<NavItem>
						<NavLink href="/">Home</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/Projects">Projets</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/Deposit">Déposer un projet</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/Connection">Se connecter</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/Admin">Admin</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="#">Fr</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="#">En</NavLink>
					</NavItem>
					<hr />
				</Nav>
		);
	}
}
export default Navs;