import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Container, Dropdown, DropdownToggle, DropdownItem, Row, DropdownMenu } from 'reactstrap';
import DropdownFilter from './DropdownFilter';

class ProjectFilter extends React.Component{
    render(){
        return(
            <div>{' '}
                <i class="fa fa-filter"/>
                Filtrer par:{' '}
                <DropdownFilter/>
                <Container>
                {' '}
                <Dropdown size="lg">
                    <DropdownToggle caret>Major(s)</DropdownToggle>
                    <DropdownMenu>
                    <DropdownItem>IBO</DropdownItem>
                    <DropdownItem>IF</DropdownItem>
                    <DropdownItem>MNM</DropdownItem>
                    <DropdownItem>NE</DropdownItem>
                    </DropdownMenu>
                </Dropdown></Container>
            
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

