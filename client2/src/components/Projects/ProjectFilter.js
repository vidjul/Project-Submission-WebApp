import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Container, Dropdown, DropdownToggle, DropdownItem, Row, DropdownMenu } from 'reactstrap';
import DropdownFilter from './DropdownFilter';

class ProjectFilter extends React.Component{
    handledropDownValue(dropDownValue,filterName){
        console.log(dropDownValue);
        console.log(filterName);
        this.props.getdropDownValue(dropDownValue,filterName);
    }
    
    render(){
        return(
            <div>{' '}
                <i class="fa fa-filter"/>
                Filtrer par:{' '}
                <Container>
                    <DropdownFilter filterName="Année" getdropDownValue={this.handledropDownValue.bind(this)}/>{' '}
                    <DropdownFilter filterName="Majeure" getdropDownValue={this.handledropDownValue.bind(this)}/>
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

