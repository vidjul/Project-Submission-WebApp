import React, { Component } from 'react';
class SpecializationInput extends Component {

    render() {
        return (
            <div>
                <div class="form-group">
                    <label className = "col-md-3 control-label">Specialisation</label>
                    <div className= "col-md-4">
                        <select onChange= {this.props.change} multiple="" class="form-control">
                            <option>Informatique, BigData et objets connectes</option>
                            <option>Nouvelle energie</option>
                            <option>Ingenieurie financiaire</option>
                            <option>Mecanique</option>
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}

export default SpecializationInput;
