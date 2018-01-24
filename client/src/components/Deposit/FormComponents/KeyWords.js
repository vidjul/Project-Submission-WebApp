import React, { Component } from 'react';
import { WithContext as ReactTags } from 'react-tag-input';
class KeyWords extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tags: [{ id: 1, text: "Big Data" }, { id: 2, text: "BlockChain" }, { id: 3, text: "Aeronautique" }],
            suggestions: ["Test", "Test2"]
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAddition = this.handleAddition.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
    }

    handleDelete(i) {
        let tags = this.state.tags;
        tags.splice(i, 1);
        this.setState({ tags: tags });
    }

    handleAddition(tag) {
        let tags = this.state.tags;
        tags.push({
            id: tags.length + 1,
            text: tag
        });
        this.props.change
    }

    handleDrag(tag, currPos, newPos) {
        let tags = this.state.tags;

        // mutate array 
        tags.splice(currPos, 1);
        tags.splice(newPos, 0, tag);

        // re-render 
        this.setState({ tags: tags });
    }

    render() {
        const { tags, suggestions } = this.state;
        return (
            <div className="form-group">
                <label className="col-md-3 control-label">KeyWords</label>
                <div className="col-md-9">
                    <ReactTags
                        tags={tags}
                        suggestions={suggestions}
                        handleDelete={this.handleDelete}
                        handleAddition={this.handleAddition}
                        handleDrag={this.handleDrag} />
                </div>
            </div>
        )
    };
}

export default KeyWords;
