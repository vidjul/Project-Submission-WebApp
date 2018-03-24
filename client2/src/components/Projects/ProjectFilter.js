import React from 'react';
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
        this.changeMotsClesValue = this.changeMotsClesValue.bind(this);

        this.state = {
          years : [],
          majors : [],
          mots_cles_value : "",
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

    changeMotsClesValue(e,value){
        
        this.setState({mots_cles_value:value}, function(){
            console.log(this.state.mots_cles_value);
            this.props.getMotsClesValue(this.state.mots_cles_value);
        });
    }

    componentDidMount() {
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
                                    <MenuItem value="" primaryText="" />
                                    <MenuItem value="A4" primaryText="A4" />
                                    <MenuItem value="A5" primaryText="A5" />
                                    </SelectField>

                                </Col>
                                <Col md={3}>
                                    <SelectField
                                        floatingLabelText="Majeure"
                                        onChange={this.changeMajorValue}
                                        value={this.state.majorValue}
                                    >
                                    <MenuItem value="" primaryText="" />
                                    {this.state.majors.map(major => <MenuItem value={major} primaryText={major}/>)}
                                    </SelectField>

                                </Col>
                                <Col md={6}>
                                    <TextField
                                        floatingLabelText="Mots clés"
                                        onChange={this.changeMotsClesValue}
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

