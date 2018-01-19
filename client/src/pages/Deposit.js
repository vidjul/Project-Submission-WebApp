import React, { Component } from 'react';
import Nav from '../components/nav/Nav.js';
class Deposit extends Component {

  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <div className="portlet box green">
            <div className="portlet-title">
              <div className="caption">
                <i className="fa fa-rocket"></i>Deposez votre projet !</div>
            </div>
            <div className="portlet-body form">
              <form action="#" className="form-horizontal">
                <div className="form-body">
                  <div className="form-group">
                    <label className="col-md-3 control-label">Titre de votre projet</label>
                    <div className="col-md-4">
                      <input type="text" id="projectTitle" className="form-control input-circle" placeholder="Titre" />
                    </div>

                    <label className="col-md-2 control-label">Annee du projet</label>
                    <div class="md-radio-inline">
                      <div class="md-radio">
                        <input type="radio" id="radio53" name="radio2" class="md-radiobtn"/>
                          <label for="radio53">
                            <span></span>
                            <span class="check"></span>
                            <span class="box"></span> A3 
                          </label>
                    </div>
                        <div class="md-radio">
                          <input type="radio" id="radio54" name="radio2" class="md-radiobtn"/>
                            <label for="radio54">
                              <span></span>
                              <span class="check"></span>
                              <span class="box"></span> A4 </label>
                                                                            </div>
                          <div class="md-radio">
                            <input type="radio" id="radio55" name="radio2" class="md-radiobtn"/>
                              <label for="radio55">
                                <span></span>
                                <span class="check"></span>
                                <span class="box"></span> A5 </label>
                          </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-3 control-label">Email Address</label>
                          <div className="col-md-4">
                            <div className="input-group">
                              <span className="input-group-addon input-circle-left">
                                <i className="fa fa-envelope"></i>
                              </span>
                              <input type="email" className="form-control input-circle-right" placeholder="Email Address" /> </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-3 control-label">Password</label>
                          <div className="col-md-4">
                            <div className="input-group">
                              <input type="password" className="form-control input-circle-left" placeholder="Password" />
                              <span className="input-group-addon input-circle-right">
                                <i className="fa fa-user"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-3 control-label">Left Icon</label>
                          <div className="col-md-4">
                            <div className="input-icon">
                              <i className="fa fa-bell-o"></i>
                              <input type="text" className="form-control input-circle" placeholder="Left icon" /> </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-3 control-label">Right Icon</label>
                          <div className="col-md-4">
                            <div className="input-icon right">
                              <i className="fa fa-microphone"></i>
                              <input type="text" className="form-control input-circle" placeholder="Right icon" /> </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-3 control-label">Input With Spinner</label>
                          <div className="col-md-4">
                            <input type="password" className="form-control spinner input-circle" placeholder="Password" /> </div>
                        </div>
                        <div className="form-group last">
                          <label className="col-md-3 control-label">Static Control</label>
                          <div className="col-md-4">
                            <span className="form-control-static"> email@example.com </span>
                          </div>
                        </div>
                      </div>
                      <div className="form-actions">
                        <div className="row">
                          <div className="col-md-offset-3 col-md-9">
                            <button type="submit" className="btn btn-circle green">Submit</button>
                            <button type="button" className="btn btn-circle grey-salsa btn-outline">Cancel</button>
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
