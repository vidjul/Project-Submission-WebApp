import React, { Component } from 'react';
class EmailInput extends Component {

    render() {
        return (
            <div>
                <label className="col-md-3 control-label">Votre email</label>
                <div className="col-md-5">
                    <div className="input-group">
                        <span className="input-group-addon input-circle-left">
                            <i className="fa fa-mortar-email"></i>
                        </span>
                        <input type="email" id="company" className="form-control input-circle-right" placeholder="Email" />
                    </div>
                </div>
            </div>
        );
    }
}

export default EmailInput;
