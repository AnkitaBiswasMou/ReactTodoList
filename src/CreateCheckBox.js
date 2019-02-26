import React, { Component } from 'react';

class CreateCheckBox extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.sendValueToParent = this.sendValueToParent.bind(this);
        this.state = { inputField: '' }
    }
    render() {
        return (
            <div className="inputContainer">
                <input type="text" value={this.state.inputField} onChange={this.handleChange}></input>
                <button onClick={this.sendValueToParent}> Submit</button>
            </div>
        );
    }

    handleChange(event) {
        this.setState({ inputField: event.target.value })
    }
    sendValueToParent(event) {
        event.preventDefault();
        this.props.handlerFromParant(this.state.inputField);
        this.setState({
            inputField: ''
        });
    }
}

export default CreateCheckBox;