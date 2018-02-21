import React, { Component } from 'react';
class YearInput extends Component {

    render() {
        return (
            <div>
                <label className="col-md-2 control-label">Annee du projet</label>
                <div className="md-checkbox-inline">
                    <div className="md-checkbox">
                        <input name = "year" value="A3" type="checkbox" onChange={this.props.change} id="checkbox6" className="md-check" />
                        <label htmlFor="checkbox6">
                            <span className="inc"></span>
                            <span className="check"></span>
                            <span className="box"></span> A3</label>
                    </div>
                    <div className="md-checkbox">
                        <input name = "year" value="A4" type="checkbox" onChange={this.props.change} id="checkbox7" className="md-check" />
                        <label htmlFor="checkbox7">
                            <span className="inc"></span>
                            <span className="check"></span>
                            <span className="box"></span> A4 </label>
                    </div>
                    <div className="md-checkbox">
                        <input name = "year" value="A5" type="checkbox" onChange={this.props.change} id="checkbox8" className="md-check" />
                        <label htmlFor="checkbox8">
                            <span className="inc"></span>
                            <span className="check"></span>
                            <span className="box"></span> A5
                                    </label>
                    </div>
                </div>
            </div>
        );
    }
}

export default YearInput;
