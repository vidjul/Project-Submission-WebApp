import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Dropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap';
import DropdownFilter from './DropdownFilter';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import { Container, Row, Col } from 'react-grid-system';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FilterIcone from 'material-ui/svg-icons/content/filter-list'
import TextField from 'material-ui/TextField'
class ProjectFilter extends React.Component {
    handledropDownValue(dropDownValue,filterName){
        console.log(dropDownValue);
        console.log(filterName);
        this.props.getdropDownValue(dropDownValue,filterName);
    }
    render() {
        return (
            <div>{' '}
                <Container fluid>
                    <Card>
                        <CardHeader
                            title="Filtres"
                            showExpandableButton={true}
                            closeIcon={<FilterIcone />}
                            openIcon={<FilterIcone />}
                        />
                        <CardText expandable={true}>
                            <Row>
                                <Col md={3}>
                                    <SelectField
                                        floatingLabelText="Année"
                                    >
                                    </SelectField>
                                </Col>
                                <Col md={3}>
                                    <SelectField
                                        floatingLabelText="Majeure"
                                    >
                                    </SelectField>
                                </Col>
                                <Col md={6}>
                                    <TextField
                                        floatingLabelText="Mots clés"
                                        fullwidth
                                    />
                                </Col>

                            </Row>
                        </CardText>
                    </Card>
                </Container>
            </div>
        );
    }
}

export default ProjectFilter;

