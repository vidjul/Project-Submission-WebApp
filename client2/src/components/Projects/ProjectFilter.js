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
    constructor(props) {
        super(props);

        this.changeYearValue = this.changeYearValue.bind(this);
        this.changeMajorValue = this.changeMajorValue.bind(this);

        this.state = {
          years : [],
          majors : [],
          yearValue:this.props.filterName,
          majorValue:this.props.filterName

        };
      }

    changeYearValue(e,index,value) {
        this.setState({yearValue: value}, function(){
          this.props.getdropDownValue(this.state.yearValue,"Année");
        });
    }

    changeMajorValue(e,index,value) {
        this.setState({majorValue: value}, function(){
          this.props.getdropDownValue(this.state.majorValue,"Majeure");
        });
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
        //console.log(this.state.dropDownValue);
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
                                        onChange={this.changeYearValue}
                                        value={this.state.yearValue}
                                    >
                                    {this.state.years.map(year =><MenuItem value={year} primaryText={year} />)}
                                    </SelectField>

                                </Col>
                                <Col md={3}>
                                    <SelectField
                                        floatingLabelText="Majeure"
                                        onChange={this.changeMajorValue}
                                        value={this.state.majorValue}
                                    >
                                    {this.state.majors.map(major => <MenuItem value={major} primaryText={major}/>)}
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

