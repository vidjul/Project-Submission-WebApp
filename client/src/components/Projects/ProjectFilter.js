import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Container, Dropdown, DropdownToggle, DropdownItem } from 'reactstrap';

class ProjectFilter extends React.Component{
    render(){
        return(
            <div>
                
                <Container>
                <i class="fa fa-filter"/>
                Filtrer par:
                
                <Dropdown size="lg">
                    <DropdownToggle>Year</DropdownToggle>
                    <DropdownItem>4A</DropdownItem>
                    <DropdownItem>5A</DropdownItem>
                </Dropdown>{' '}
                <Dropdown size="lg">
                    <DropdownToggle>Major(s)</DropdownToggle>
                    <DropdownItem>IBO</DropdownItem>
                    <DropdownItem>IF</DropdownItem>
                    <DropdownItem>MNM</DropdownItem>
                    <DropdownItem>NE</DropdownItem>
                </Dropdown>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                    <InputGroupText>Mots Clés</InputGroupText>
                    </InputGroupAddon>
                    <Input />
                </InputGroup></Container>
            </div>
        );
    }
}

export default ProjectFilter;

