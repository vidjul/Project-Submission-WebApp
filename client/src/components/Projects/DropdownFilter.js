import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Container, Dropdown, DropdownToggle, DropdownItem, Row, DropdownMenu } from 'reactstrap';

class DropDownFilter extends React.Component{
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
      }
    
      toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }

      render(){
          return(
            <Dropdown size="lg" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownMenu>
                <DropdownToggle caret>Year</DropdownToggle>
                <DropdownItem>4A</DropdownItem>
                <DropdownItem>5A</DropdownItem></DropdownMenu>
            </Dropdown>
          );
      }
}

export default DropDownFilter;