import React, { Component } from 'react';
class YearInput extends Component {

    render() {
        return (
            <div>
                <label className="col-md-2 control-label">Annee du projet</label>
                <div class="md-checkbox-inline">
                    <div class="md-checkbox">
                        <input name = "year" value="A3" type="checkbox" onChange={this.props.change} id="checkbox6" class="md-check" />
                        <label for="checkbox6">
                            <span class="inc"></span>
                            <span class="check"></span>
                            <span class="box"></span> A3</label>
                    </div>
                    <div class="md-checkbox">
                        <input name = "year" value="A4" type="checkbox" onChange={this.props.change} id="checkbox7" class="md-check" />
                        <label for="checkbox7">
                            <span class="inc"></span>
                            <span class="check"></span>
                            <span class="box"></span> A4 </label>
                    </div>
                    <div class="md-checkbox">
                        <input name = "year" value="A5" type="checkbox" onChange={this.props.change} id="checkbox8" class="md-check" />
                        <label for="checkbox8">
                            <span class="inc"></span>
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
