import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Container, Dropdown, DropdownToggle, DropdownItem, Row, DropdownMenu } from 'reactstrap';

class DropDownFilter extends React.Component{
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false,
          years : [],
          majors : []
        };
      }

      componentDidMount() {
        fetch('/api/majors/:studyYear')
            .then(res => res.json())
            .then(years => this.setState({years}))
            .catch((err) =>{console.log(err);});
        
        fetch('/api/majors/major/:major')
            .then(res => res.json())
            .then(majors => this.setState({majors}))
            .catch((err) =>{console.log(err);});
      }
    
      toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }

      render(){
        console.log(this.state.years);

        if(this.props.filterName === "Année"){
          return(
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle caret>{this.props.filterName}</DropdownToggle>
              <DropdownMenu>
              {this.state.years.map(year => <DropdownItem key={year}>{year}</DropdownItem>)}
              </DropdownMenu>
            </Dropdown>
          );
        } else {
          return(
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle caret>{this.props.filterName}</DropdownToggle>
              <DropdownMenu>
              {this.state.majors.map(major => <DropdownItem key={major}>{major}</DropdownItem>)}
              </DropdownMenu>
            </Dropdown>
          );
        }
          
      }
}

export default DropDownFilter;