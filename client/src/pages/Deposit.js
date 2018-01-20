import React, { Component } from 'react';
import Nav from '../components/nav/Nav.js';
import TitleInput from '../components/Deposit/FormComponents/TitleInput';
import FormTitle from '../components/Deposit/FormComponents/FormTitle';
import YearInput from '../components/Deposit/FormComponents/YearInput';
import SpecializationInput from '../components/Deposit/FormComponents/SpecializationInput';
import DescriptionInput2 from '../components/Deposit/FormComponents/DescriptionInput2';
import FilesInput from '../components/Deposit/FormComponents/FilesInput';

class Deposit extends Component {

  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <div className="portlet box green">
            <FormTitle/>
            <div className="portlet-body form">
              <form  className="form-horizontal">
                <div className="form-body">
                  <div className="form-group">
                    <TitleInput/>
                    <YearInput/>
                  </div>
                  
                  <SpecializationInput/>
                  <DescriptionInput2/>
                  <FilesInput/>
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
