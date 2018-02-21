import React, { Component } from 'react';
import TitleInput from './FormComponents/TitleInput';
import FormTitle from './FormComponents/FormTitle';
import YearInput from './FormComponents/YearInput';
import SpecializationInput from './FormComponents/SpecializationInput';
import DescriptionInput2 from './FormComponents/DescriptionInput2';
import FilesInputs from './FormComponents/FilesInputs';
import CompanyInput from './FormComponents/CompanyInput';
import EmailInput from './FormComponents/EmailInput';
import KeyWords from './FormComponents/KeyWords';

class FormDeposit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            titleValid : false,
            study_year: [],
            study_yearValid : false,
            specialization: [],
            specializationValid : false,
            description: "",
            descriptionValid : false,
            keyWords : [],
            keyWordsValid : false,
            files: [],
            filesValid : false,
            email : "",
            company : ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyWords = this.handleKeyWords.bind(this);
    }


    handleKeyWords(key){

        var keys = [];
        key.forEach(element => {
            keys.push(element.text)
        });
        console.log(keys)
        this.setState({ keyWords : keys});
    }

    handleSubmit(event) {
        event.preventDefault();
        const form = {
            title: this.state.title,
            study_year: this.state.study_year,
            specialization: this.state.specialization,
            description: this.state.description,
            keywords : this.state.keyWords,
            email : this.state.email,
            company : this.state.company
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


    handleChange(e) {
        switch (e.target.name) {
            case "year":
                var temp = this.state.study_year;
                if (e.target.checked) {
                    temp.push(e.target.value);
                }
                else {
                    var index = temp.indexOf(e.target.value)
                    if (index > -1) {
                        temp.splice(index, 1);
                    }
                }
                this.state.study_year = temp;
                break;

            case "specialization":
                var values = []
                for (var i = 0; i < e.target.options.length; i++) {
                    if (e.target.options[i].selected) {
                        values.push(e.target.options[i].value);
                    }
                }
                this.setState({ specialization: values })
                break;

            default:
                this.setState({
                    [e.target.name]: e.target.value
                })
        }
    }

    render() {



        return (
            <form onSubmit={this.handleSubmit} className="form-horizontal">

                <div className="form-body ">
                    <h4> Parlez nous de vous </h4>
                    <div className="row" >
                        <CompanyInput change = {this.handleChange}/>
                    </div>

                    <div className="row" style={{ marginTop: 5 + 'px' }}>
                        <EmailInput change = {this.handleChange}/>
                    </div>
                    <hr />
                    <h4> Presentez votre projet </h4>
                    <div className="form-group row" style={{ marginTop: 5 + 'px' }}>
                        <TitleInput change={this.handleChange} valid = {this.state.titleValid}/>
                        <YearInput change={this.handleChange}/>
                    </div>

                    <SpecializationInput change={this.handleChange} />
                    <DescriptionInput2 change={this.handleChange} />
                    <KeyWords change = {this.handleKeyWords}/>
                    <FilesInputs change={this.handleKeyWords} />
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
