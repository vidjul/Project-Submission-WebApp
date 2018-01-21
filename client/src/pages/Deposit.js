import React, { Component } from 'react';
import Nav from '../components/nav/Nav.js';
import TitleInput from '../components/Deposit/FormComponents/TitleInput';
import FormTitle from '../components/Deposit/FormComponents/FormTitle';
import YearInput from '../components/Deposit/FormComponents/YearInput';
import SpecializationInput from '../components/Deposit/FormComponents/SpecializationInput';
import DescriptionInput2 from '../components/Deposit/FormComponents/DescriptionInput2';
import FilesInput from '../components/Deposit/FormComponents/FilesInput';

class Deposit extends Component {

  constructor(props){
    super(props);
    this.state = {
      title : "",
      study_year : [],
      specialization : [],
      description : "",
      files : []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.handleSpeChange = this.handleSpeChange.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    const form = {
      title : this.state.title,
      study_year : this.state.year,
      specialization : this.state.specialization,
      description : this.state.description
    }

    console.log(form);
    try{
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

  handleTitleChange(e){
    this.setState({title : e.target.value})
  }
  handleYearChange(e){
    this.setState({year : e.target.value})
  }
  handleSpeChange(e){
    this.setState({specialization : e.target.value})
  }
  handleDescChange(e){
    this.setState({description : e.target.value})
  }
  handleFileChange(e){
    this.setState({files : e.target.value})
  }

  render() {

    

    return (
      <div>
        <Nav />
        <div className="container">
          <div className="portlet box green">
            <FormTitle/>
            <div className="portlet-body form">
              <form onSubmit = {this.handleSubmit} className="form-horizontal">
                <div className="form-body">
                  <div className="form-group">
                    <TitleInput change = {this.handleTitleChange}/>
                    <YearInput change = {this.handleYearChange}/>
                  </div>
                  
                  <SpecializationInput change = {this.handleSpeChange}/>
                  <DescriptionInput2 change = {this.handleDescChange}/>
                  <FilesInput change = {this.handleFileChange} />
                      <div className="form-actions">
                        <div className="row">
                          <div className="col-md-offset-3 col-md-9">
                            <button type="submit" className="btn btn-circle green">Submit</button>
                            <button type="button" className="btn btn-circle grey-salsa btn-outline">Cancel</button>
                          </div>
                        </div>
                      </div>
                    </div>
                   </form>
                  </div>
                </div>
              </div>
            </div>
            );
    }
  }

export default Deposit;
