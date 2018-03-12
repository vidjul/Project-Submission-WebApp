import React from 'react';
import {Nav, NavItem, NavLink,Navbar,NavbarBrand,NavbarToggler} from 'reactstrap';


console.log("Passed");
class Navs extends React.Component {
	render() {
		return (
			<div style= {{marginBottom : 100+'px'}}>
			<Navbar color = "light" fixed = "top">
				<NavbarBrand href="/"><img src="./logo_pulv.png" height="50" width="50" /></NavbarBrand>
				<Nav className="ml-auto">
					<NavItem>
						<NavLink className="text-secondary" href="/">Home</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className="text-secondary" href="/Projects">Projets</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className="text-secondary" href="/Deposit">Déposer un projet</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className="text-secondary" href="/Connection">Se connecter</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className="text-secondary" href="/Admin">Admin</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className="text-secondary" href="/forgot">lien projet perdu</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className="text-primary" href="#">FR</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className="text-primary" href="#">EN</NavLink>
					</NavItem>
					<hr />
				</Nav>
				</Navbar>
				</div>
		);
	}
}
export default Navs;