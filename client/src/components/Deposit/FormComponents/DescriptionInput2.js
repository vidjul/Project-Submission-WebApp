import React, { Component } from 'react';
class DescriptionInput2 extends Component {

    render() {
        return (
            <div>
                <div className="form-group">
                    <label className="col-md-3 control-label">Description</label>
                    <div className="col-md-9">
                        <textarea name = "description" onChange = {this.props.change} className="form-control" rows="3"></textarea>
                    </div>
                </div>
            </div>
        );
    }
}

export default DescriptionInput2;
