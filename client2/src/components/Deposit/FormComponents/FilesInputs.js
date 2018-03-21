import React, { Component } from 'react';
import Files from 'react-files';
import ReactDOM from 'react-dom';
import {FormGroup,Label} from "reactstrap";
class FilesInputs extends Component {

    OnFilesError(error, file) {
        console.log('error code ' + error.code + ': ' + error.message)
    }

    render() {
        return (
            <FormGroup>
                <Label for = "files"> Others files</Label>
                <div className="file">
                    <Files
                        className='files-dropzone'
                        onChange={this.props.change}
                        onError={this.OnFilesError}
                        accepts={['image/*', 'application/pdf']}
                        multiple
                        maxFiles={3}
                        maxFileSize={10000000}
                        minFileSize={0}
                        clickable
                    >
                        <p className="lead text-center">Drop files here or click to upload</p>
                        <p className="text-center help-block">Accepted files : png , pdf , csv ...</p>
                    </Files>
                </div>
                <div id="addedFiles" className="col-md-4 list-group">
                </div>
            </FormGroup>);
    }
}

export default FilesInputs;
