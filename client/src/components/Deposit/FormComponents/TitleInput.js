import React, { Component } from 'react';
class TitleInput extends Component {


    render() {
        return (
            <div>
                <label className="col-md-3 control-label">Titre de votre projet</label>
                <div className="col-md-4">
                    <div className = "input-group">
                        <span className="input-group-addon input-circle-left">
                            <i className="fa fa-mortar-board"></i>
                        </span>
                        <input name = "title" onChange={this.props.change} type="text" id="projectTitle" className="form-control input-circle-right" placeholder="Titre" />
                    </div>
                </div>
            </div>
        );
    }
}

export default TitleInput;
