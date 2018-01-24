import React, { Component } from 'react';
class CompanyInput extends Component {

    render() {
        return (
            <div>
                <label className="col-md-3 control-label">Votre entreprise</label>
                <div className="col-md-4">
                    <div className="input-group">
                        <span className="input-group-addon input-circle-left">
                            <i className="fa fa-mortar-board"></i>
                        </span>
                        <input type="text" id="company" className="form-control input-circle-right" placeholder="Titre" />
                    </div>
                </div>
            </div>
        );
    }
}

export default CompanyInput;
