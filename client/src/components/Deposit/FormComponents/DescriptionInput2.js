import React, { Component } from 'react';
class DescriptionInput2 extends Component {

    render() {
        return (
            <div>
                <div class="form-group">
                    <label class="col-md-3 control-label">Description</label>
                    <div class="col-md-9">
                        <textarea name = "description" onChange = {this.props.change} class="form-control" rows="3"></textarea>
                    </div>
                </div>
            </div>
        );
    }
}

export default DescriptionInput2;
