import React, { Component } from 'react';
class CompanyInput extends Component {

    render() {
        return (
            <div className = "form-group">
                <label className="col-md-3 control-label">Votre entreprise</label>
                <div className="col-md-5">
                    <div className="input-group">
                        <span className="input-group-addon input-circle-left">
                            <i className="fa fa-mortar-bitcoin"></i>
                        </span>
                        <input type="text" id="company" className="form-control input-circle-right" placeholder="Votre entreprise" />
                    </div>
                </div>
            </div>
        );
    }
}

export default CompanyInput;
