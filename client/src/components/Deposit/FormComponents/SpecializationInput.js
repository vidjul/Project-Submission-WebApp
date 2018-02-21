import React, { Component } from 'react';
class SpecializationInput extends Component {


    render() {
        return (
            <div>
                <div className="form-group">
                    <label className = "col-md-3 control-label">Specialisation</label>
                    <div className= "col-md-4">
                        <select name = "specialization" onChange= {this.props.change} multiple={true} className="form-control">
                            <option value="IBO">Informatique, BigData et objets connectes</option>
                            <option value = "NE">Nouvelle energie</option>
                            <option value = "IF">Ingenieurie financiaire</option>
                            <option value = "MCM">Mecanique</option>
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}

export default SpecializationInput;
