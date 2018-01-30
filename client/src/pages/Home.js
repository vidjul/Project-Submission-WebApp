import React, { Component } from 'react';
import './Index.css';
import Nav from '../components/nav/Nav.js';
import Carousel from '../components/Carousel.js'
import '../components/components.css';
class Home extends Component {

  render() {
    return (
      <div>
        <Nav />
        <div className="row">
          <div className="col-md-6">
            <div className="btn-group">
              <button id="sample_editable_1_new" className="btn sbold green"> Add New
                                                                                        <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="btn-group pull-right">
              <button className="btn green  btn-outline dropdown-toggle" data-toggle="dropdown">Tools
                                                                                        <i className="fa fa-angle-down"></i>
              </button>
              <ul className="dropdown-menu pull-right">
                <li>
                  <a href="javascript:;">
                    <i className="fa fa-print"></i> Print </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <i className="fa fa-file-pdf-o"></i> Save as PDF </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <i className="fa fa-file-excel-o"></i> Export to Excel </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Carousel/>
      </div>
    );
  }
}

export default Home;
