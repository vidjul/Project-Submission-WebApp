import React, { Component } from 'react';
class YearInput extends Component {

    render() {
        return (
            <div>
                <label className="col-md-2 control-label">Annee du projet</label>
                <div class="md-radio-inline">
                    <div class="md-radio">
                        <input onChange = {this.props.change} type="radio" id="radio53" name="radio2" class="md-radiobtn" />
                        <label htmlFor="radio53">
                            <span></span>
                            <span class="check"></span>
                            <span class="box"></span> A3
                        </label>
                    </div>
                    <div class="md-radio">
                        <input type="radio" id="radio54" name="radio2" class="md-radiobtn" />
                        <label htmlFor="radio54">
                            <span></span>
                            <span class="check"></span>
                            <span class="box"></span> A4 </label>
                    </div>
                    <div class="md-radio">
                        <input type="radio" id="radio55" name="radio2" class="md-radiobtn" />
                        <label htmlFor="radio55">
                            <span></span>
                            <span class="check"></span>
                            <span class="box"></span> A5
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

export default YearInput;
