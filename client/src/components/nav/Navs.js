import React from 'react';
import {Nav, NavItem, NavLink,Navbar,NavbarBrand,NavbarToggler} from 'reactstrap';


console.log("Passed");
class Navs extends React.Component {
	render() {
		return (
			<Navbar color = "light" fixed = "top">
				 <NavbarBrand href="/"><img src="./logo_pulv.png" /></NavbarBrand>
				<Nav className="ml-auto">
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
				</Navbar>
		);
	}
}
export default Navs;