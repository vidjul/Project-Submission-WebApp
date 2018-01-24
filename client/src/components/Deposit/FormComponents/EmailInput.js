import React, { Component } from 'react';
class EmailInput extends Component {

    render() {
        return (
            <div className="form-group">
                <label className="col-md-3 control-label">Votre email</label>
                <div className="col-md-5">
                    <div className="input-group">
                        <span className="input-group-addon input-circle-left">
                            <i className="fa fa-envelope"></i>
                        </span>
                        <input type="email" id="company" className="form-control input-circle-right" placeholder="Email" />
                    </div>
                    <small id="emailHelp" class="form-text text-muted">Un lien vous sera envoyé vous permettant de modifier votre projet.</small>
                </div>
            </div>
        );
    }
}

export default EmailInput;
