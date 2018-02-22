import React, { Component } from 'react';
import Files from 'react-files';
import ReactDOM from 'react-dom';
class FilesInputs extends Component {

    constructor(props) {
        super(props);
        this.state = {
          
          files: []
        }
        this.OnFilesChange = this.OnFilesChange.bind(this);
    }

    addViewFile(files) {
        ReactDOM.render(
        <a class="file-add list-group-item list-group-item-action">
        {files[files.length-1].name}
        </a>
        ,document.getElementById("addedFiles"))
    }

    OnFilesChange(files) {
        this.setState({ files: files });
        console.log(this.state);
        this.addViewFile(files)
    }

    OnFilesError(error, file) {
        console.log('error code ' + error.code + ': ' + error.message)
    }

    render() {
        return (
            <div className="form-group">
                <label className="col-md-3 control-label">Others files</label>
                <div className="file col-md-5">
                    <Files
                        className='files-dropzone'
                        onChange={this.OnFilesChange}
                        onError={this.OnFilesError}
                        accepts={['image/*', 'application/pdf']}
                        multiple
                        maxFiles={3}
                        maxFileSize={10000000}
                        minFileSize={0}
                        clickable
                    >
                        <p className="lead text-center">Drop files here or click to upload</p>
                        <p class="text-center help-block">Accepted files : png , pdf , csv ...</p>
                    </Files>
                </div>
                <div id = "addedFiles" className="col-md-4 list-group">
                </div>
            </div>);
    }
}

export default FilesInputs;
