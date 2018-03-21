import React from 'react';
import { Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import ToolbarGroup from 'material-ui/Toolbar/ToolbarGroup'
import {Link} from 'react-router-dom'

class Navs extends React.Component {
	constructor(props) {
		super(props)
		this.styles = {
			title: {
				cursor: 'pointer',
			},
			menuItem : {
				color : 'white',
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
			{label : "Home" , href : "/"},
			{label : "Projets" , href : "/Projects"},
			{label : "Déposer un projet" , href : "/Deposit"},
			{label : "Se connecter" , href : "/Connection"},
			{label : "Admin" , href : "/Admin"},
			{label : "Lien projet perdu", href : "/forgot"},
			{label : "FR" , href : "#"},
			{label : "EN" , href : "#"}
		]
		var menu = <div> {configItem.map( (item) =>
	<Link key = {item.label} to = {item.href}>
		<FlatButton label = {item.label} style = {this.styles.menuItem} />
		</Link>
		)}
		</div>
		return (
			<div>
				<AppBar
					title={<img style = {this.styles.title} src="/logo_pulv.png" height="50" width="50" />}
					onTitleClick={this.handleclick.bind(this)}
					iconElementRight={menu}
					showMenuIconButton = {false} />
			</div>
		);
	}
}
export default Navs;