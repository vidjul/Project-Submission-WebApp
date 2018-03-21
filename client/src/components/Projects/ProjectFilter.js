import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Container, Dropdown, DropdownToggle, DropdownItem, Row, DropdownMenu, Col } from 'reactstrap';
import DropdownFilter from './DropdownFilter';

class ProjectFilter extends React.Component{
    render(){
        return(
            <div>{' '}
                <Container>
                    
                    <Row>
                        <i className="fa fa-filter"/>
                        <div>Filtrer par:</div> {' '}
                        <DropdownFilter filterName="Année"/>{' '}
                        <DropdownFilter filterName="Majeure"/>
                    </Row>
                </Container>
            
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

