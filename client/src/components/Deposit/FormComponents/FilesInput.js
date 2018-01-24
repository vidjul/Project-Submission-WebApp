import React, { Component } from 'react';
class FilesInput extends Component {

    render() {
        return (
            <div>
                <form action="" class="dropzone dropzone-file-area dz-clickable" id="my-dropzone" style={{width: 500+'px', marginTop: 50+'px'}}>
                    <h3 class="sbold">Drop files here or click to upload</h3>
                    <p> You can add MediaFiles here !</p>
                    <div class="dz-default dz-message"><span></span></div></form>
            </div>
        );
    }
}

export default FilesInput;
