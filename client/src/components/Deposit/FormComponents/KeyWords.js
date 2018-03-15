import React, { Component } from 'react';
import { WithContext as ReactTags } from 'react-tag-input';
import { FormGroup, Label, Row, Col } from "reactstrap";
class KeyWords extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tags: [],                           //{ id: 1, text: "Big Data" }, { id: 2, text: "BlockChain" }, { id: 3, text: "Aeronautique" }
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
        this.props.change(this.state.tags);
    }

    handleAddition(tag) {
        let tags = this.state.tags;
        tags.push({
            id: tags.length + 1,
            text: tag
        });
        this.setState({ tags: tags });
        this.props.change(this.state.tags);
    }

    handleDrag(tag, currPos, newPos) {
        let tags = this.state.tags;

        // mutate array 
        tags.splice(currPos, 1);
        tags.splice(newPos, 0, tag);

        // re-render 
        this.setState({ tags: tags });
        this.props.change(this.state.tags);
    }

    render() {
        const { tags, suggestions } = this.state;
        return (
            <FormGroup>
                <Label for="keyWords">Keywords</Label>
                <ReactTags
                    classNames={{ tagInputField: "form-control" }}
                    tags={tags}
                    suggestions={suggestions}
                    handleDelete={this.handleDelete}
                    handleAddition={this.handleAddition}
                    handleDrag={this.handleDrag}
                    autofocus={false} />
            </FormGroup>
        )
    };
}

export default KeyWords;
