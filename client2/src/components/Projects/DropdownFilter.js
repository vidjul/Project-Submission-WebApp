import React from 'react';
import {Container, Dropdown, DropdownToggle, DropdownItem, Row, DropdownMenu } from 'reactstrap';

class DropDownFilter extends React.Component{
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.changeValue = this.changeValue.bind(this);
        this.state = {
          dropdownOpen: false,
          years : [],
          majors : [],
          dropDownValue:this.props.filterName
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
        console.log(this.state.dropDownValue);
      }

      changeValue(e) {
        this.setState({dropDownValue: e.currentTarget.textContent})
      }
    
      toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }

      render(){
        if(this.props.filterName === "Année"){
          return(
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle caret>{this.state.dropDownValue}</DropdownToggle>
              <DropdownMenu>
              <DropdownItem onClick={this.changeValue}>{this.props.filterName}</DropdownItem>
              {this.state.years.map(year => <DropdownItem onClick={this.changeValue} key={year}>{year}</DropdownItem>)}
              </DropdownMenu>
            </Dropdown>
          );
        } else {
          return(
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle caret>{this.state.dropDownValue}</DropdownToggle>
              <DropdownMenu>
              <DropdownItem onClick={this.changeValue}>{this.props.filterName}</DropdownItem>
              {this.state.majors.map(major => <DropdownItem onClick={this.changeValue} key={major}>{major}</DropdownItem>)}
              </DropdownMenu>
            </Dropdown>
          );
        }
          
      }
}

export default DropDownFilter;