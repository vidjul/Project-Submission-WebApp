import React, { Component } from 'react';
class DescriptionInput extends Component {

    render() {
        return (
            <div>
                <div class="form-group">
                    <label class="control-label col-md-2">Editor 1</label>
                    <div class="col-md-10">
                        <ul class="wysihtml5-toolbar" style={{}}>
                            <li class="dropdown">
                                <a class="btn default dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
                                    <i class="icon-font"></i>
                                    &nbsp;
                                    <span class="current-font">Normal text</span>
                                    &nbsp;
                                    <b class="caret"></b>
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="div" tabindex="-1" href="javascript:;" unselectable="on" class="">
                                            Normal text
                                        </a>
                                    </li>
                                    <li>
                                        <a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h1" tabindex="-1" href="javascript:;" unselectable="on" class="">
                                            Heading 1
                                        </a>
                                    </li>
                                    <li>
                                        <a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h2" tabindex="-1" href="javascript:;" unselectable="on" class="">
                                            Heading 2
                                        </a>
                                    </li>
                                    <li>
                                        <a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h3" tabindex="-1" href="javascript:;" unselectable="on" class="">
                                            Heading 3
                                        </a>
                                    </li>
                                    <li>
                                        <a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h4" href="javascript:;" unselectable="on" class="">
                                            Heading 4
                                        </a>
                                    </li>
                                    <li>
                                        <a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h5" href="javascript:;" unselectable="on" class="">
                                            Heading 5
                                        </a>
                                    </li>
                                    <li>
                                        <a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h6" href="javascript:;" unselectable="on" class="">
                                            Heading 6
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div class="btn-group">
                                    <a class="btn default" data-wysihtml5-command="bold" title="CTRL+B" tabindex="-1" href="javascript:;" unselectable="on">
                                        Bold
                                    </a>
                                    <a class="btn default" data-wysihtml5-command="italic" title="CTRL+I" tabindex="-1" href="javascript:;" unselectable="on">
                                        Italic
                                    </a>
                                    <a class="btn default" data-wysihtml5-command="underline" title="CTRL+U" tabindex="-1" href="javascript:;" unselectable="on">
                                        Underline
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="btn-group">
                                    <a class="btn default" data-wysihtml5-command="insertUnorderedList" title="Unordered list" tabindex="-1" href="javascript:;" unselectable="on">
                                        <i class="fa fa-list"></i>
                                    </a>
                                    <a class="btn default" data-wysihtml5-command="insertOrderedList" title="Ordered list" tabindex="-1" href="javascript:;" unselectable="on">
                                        <i class="fa fa-th-list"></i>
                                    </a>
                                    <a class="btn default" data-wysihtml5-command="Outdent" title="Outdent" tabindex="-1" href="javascript:;" unselectable="on">
                                        <i class="fa fa-outdent"></i>
                                    </a>
                                    <a class="btn default" data-wysihtml5-command="Indent" title="Indent" tabindex="-1" href="javascript:;" unselectable="on">
                                        <i class="fa fa-indent"></i>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="btn-group">
                                    <a class="btn default" data-wysihtml5-action="change_view" title="Edit HTML" tabindex="-1" href="javascript:;" unselectable="on">
                                        <i class="fa fa-pencil"></i>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="bootstrap-wysihtml5-insert-link-modal modal fade">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <a class="close" data-dismiss="modal">
                                                    ×
                                                </a>
                                                <h3>Insert link</h3>
                                            </div>
                                            <div class="modal-body">
                                                <input value="http://" class="bootstrap-wysihtml5-insert-link-url form-control input-xlarge"/>
                                                    <label style={{marginTop:5+'px'}}>
                                                        <input type="checkbox" class="bootstrap-wysihtml5-insert-link-target" checked=""/>
                                                        Open link in new window
                                                    </label>
                                            </div>
                                            <div class="modal-footer">
                                                <a href="#" class="btn default" data-dismiss="modal">Cancel</a>
                                                <a href="#" class="btn btn-primary" data-dismiss="modal">Insert link</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a class="btn default" data-wysihtml5-command="createLink" title="Insert link" tabindex="-1" href="javascript:;" unselectable="on">
                                    <i class="fa fa-share"></i>
                                </a>
                            </li>
                            <li>
                                <a class="btn default" data-wysihtml5-command="insertImage" title="Insert image" tabindex="-1" href="javascript:;" unselectable="on">
                                    <i class="fa fa-picture-o"></i>
                                </a>
                            </li>
                        </ul>
                        <textarea class="wysihtml5 form-control" rows="6" style={{display: 'none'}}></textarea>
                        <input type="hidden" name="_wysihtml5_mode" value="1"/>
                        <iframe class="wysihtml5-sandbox" security="restricted" allowtransparency="true" frameborder="0" width="0" height="0" marginwidth="0" marginheight="0" style={{display: 'block', backgroundColor: 'rgb(255, 255, 255)', borderCollapse: 'separate', border: 1+'px' + 'solid' + 'rgb(194, 202, 216)', clear: 'none', float: 'none', margin: 0+'px', outline: 'rgb(85, 85, 85)' + 'none' + 0 +'px', outlineOffset: 0+'px', padding: 6+'px' + 12+'px', position: 'static', zIndex: 'auto', verticalAlign: 'baseline', textAlign: 'start',boxShadow: 'none', borderTopRightRadius: 0+'px', borderBottomRightRadius: 0+'px', borderBottomLeftRadius: 0+'px', borderTopLeftRadius: 0+'px', width: 918.984375+'px', height: 128+'px', top: 'auto', left: 'auto', right:'auto', bottom: 'auto'}}>
                        </iframe>
                    </div>
                </div>
            </div>
                        );
    }
}

export default DescriptionInput;
