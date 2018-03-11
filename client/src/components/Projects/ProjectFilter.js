import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Container, Dropdown, DropdownToggle, DropdownItem } from 'reactstrap';

class ProjectFilter extends React.Component{
    render(){
        return(
            <div>
                <i class="fa fa-filter"/>
                Filtrer par:
                <Container>
                <Dropdown>
                    <DropdownToggle>Year</DropdownToggle>
                    <DropdownItem>4A</DropdownItem>
                    <DropdownItem>5A</DropdownItem>
                </Dropdown></Container> {' '}
                <Dropdown>
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
                </InputGroup>
            </div>
        );
    }
}

export default ProjectFilter;

