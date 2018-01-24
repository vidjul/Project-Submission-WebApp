import React, { Component } from 'react';
import TitleInput from './FormComponents/TitleInput';
import FormTitle from './FormComponents/FormTitle';
import YearInput from './FormComponents/YearInput';
import SpecializationInput from './FormComponents/SpecializationInput';
import DescriptionInput2 from './FormComponents/DescriptionInput2';
import FilesInput from './FormComponents/FilesInput';
import CompanyInput from './FormComponents/CompanyInput';
import EmailInput from './FormComponents/EmailInput';

class FormDeposit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            study_year: [],
            specialization: [],
            description: "",
            files: []
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleSpeChange = this.handleSpeChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const form = {
            title: this.state.title,
            study_year: this.state.year,
            specialization: this.state.specialization,
            description: this.state.description
        }

        console.log(form);
        /*try{
        fetch('/api/projects',{
        method : 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body : JSON.stringify(form)})
        }
        catch(error)
        {
          console.error(error);
        }*/

    }

    handleTitleChange(e) {
        this.setState({ title: e.target.value })
    }
    handleYearChange(e) {
        if (e.target.checked) {
            this.state.study_year.push(e.target.value);
        }
        else {
            var index = this.state.study_year.indexOf(e.target.value)
            if (index > -1) {
                this.state.study_year.splice(index, 1);
            }
        }
        console.log(this.state.study_year);
        this.setState({ year: e.target.value })
    }
    handleSpeChange(e) {
        var values = []
        for (var i = 0; i < e.target.options.length; i++) {
            if (e.target.options[i].selected) {
                values.push(e.target.options[i].value);
            }
        }

        this.setState({ specialization: values })
    }
    handleDescChange(e) {
        this.setState({ description: e.target.value })
    }
    handleFileChange(e) {
        this.setState({ files: e.target.value })
    }

    render() {



        return (
            <form onSubmit={this.handleSubmit} className="form-horizontal">

                <div className="form-body ">
                <h4> Parlez nous de vous </h4>
                    <div className = "row" >
                    <CompanyInput/>
                    </div>
                    
                    <div className = "row" style = {{marginTop : 5 + 'px'}}>
                    <EmailInput/>
                    </div>
                    <hr/>
                <h4> Presentez votre projet </h4>
                    <div className="form-group row" style = {{marginTop : 5 + 'px'}}>
                        <TitleInput change={this.handleTitleChange} />
                        <YearInput change={this.handleYearChange} />
                    </div>

                    <SpecializationInput change={this.handleSpeChange} />
                    <DescriptionInput2 change={this.handleDescChange} />
                    <FilesInput change={this.handleFileChange} />
                    <div className="form-actions">
                        <div className="row">
                            <div className="col-md-offset-3 col-md-9">
                                <button type="submit" className="btn btn-circle green">Submit</button>
                                <button type="button" className="btn btn-circle grey-salsa btn-outline">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>);
    }
}

export default FormDeposit;
