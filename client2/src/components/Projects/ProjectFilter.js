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
                                        floatingLabelText="Majeur"
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

                <i class="fa fa-filter" />
                Filtrer par:{' '}
                <Container>
                    <DropdownFilter filterName="Année" />{' '}
                    <DropdownFilter filterName="Majeure" />
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

