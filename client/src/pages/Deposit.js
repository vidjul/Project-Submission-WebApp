import React, { Component } from 'react';
import Nav from '../components/nav/Nav.js';
import TitleInput from '../components/Deposit/FormComponents/TitleInput';
import FormTitle from '../components/Deposit/FormComponents/FormTitle';
import YearInput from '../components/Deposit/FormComponents/YearInput';
import SpecializationInput from '../components/Deposit/FormComponents/SpecializationInput';
import DescriptionInput2 from '../components/Deposit/FormComponents/DescriptionInput2';
import FilesInput from '../components/Deposit/FormComponents/FilesInput';
import FormDeposit from '../components/Deposit/FormDeposit';

class Deposit extends Component {

  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <div className="portlet box green">
            <FormTitle/>
            <div className="portlet-body form">
            <FormDeposit/>
                  </div>
                </div>
              </div>
            </div>
            );
    }
  }

export default Deposit;
