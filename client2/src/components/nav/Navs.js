import React from 'react';
import { Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Container, Row, Col } from 'react-grid-system'
import IconButton from 'material-ui/IconButton';
import ToolbarGroup from 'material-ui/Toolbar/ToolbarGroup'
import { Link } from 'react-router-dom';
import {
	Icon_Flag_US,
	Icon_Flag_FR
} from 'material-ui-country-flags';
class Navs extends React.Component {
	constructor(props) {
		super(props)
		this.styles = {
			title: {
				cursor: 'pointer',
			},
			menuItem: {
				color: 'white',
			},
		};
	}

	handleclick(event) {
		this.props.history.push("/")
	}

	handleButtonClick(event) {

	}

	render() {

		var configItem = [
			{ label: "Home", href: "/" },
			{ label: "Projects", href: "/Projects" },
			{ label: "Submit a project", href: "/Deposit" },
			{ label: "Log in", href: "/Connection" },
			{ label: "Admin", href: "/Admin" },
			{ label: "Project link lost", href: "/forgot" },
			{ label: "FR", href: "#", icon: true },
			{ label: "EN", href: "#", icon: true }
		]
		var menu = <Container><Row align = 'center'> {configItem.map((item) => {
			if (item.icon) {
				switch (item.label) {
					case "FR":
						return <Link key={item.label} to={item.href}>
							<IconButton>
								<Icon_Flag_FR />
							</IconButton>
						</Link>
					case "EN":
						return <Link key={item.label} to={item.href}>
							<IconButton>
								<Icon_Flag_US />
							</IconButton>
						</Link>
				}

			} else {
				return <Link key={item.label} to={item.href}>
					<FlatButton label={item.label} style={this.styles.menuItem} />
				</Link>
			}
		})}
		</Row>
		</Container>
		return (
			<div>
				<AppBar
					title={<img style={this.styles.title} src="/logo_pulv.png" height="50" width="50" />}
					onTitleClick={this.handleclick.bind(this)}
					iconElementRight={menu}
					showMenuIconButton={false} />
			</div>
		);
	}
}
export default Navs;