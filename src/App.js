import React, { Component } from 'react';
import './App.css';
import CreateCheckBox from './CreateCheckBox';
import CheckBoxList from './CheckBoxList';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.state = {
      wishlist: [], count: 0, currentInput: ''
    }
  }
  render() {
    return (
      <div className="container">
        <CreateCheckBox onClick={this.addRow} handlerFromParant={this.handleInput}></CreateCheckBox>
        <CheckBoxList items={this.state.wishlist} count={this.state.count}></CheckBoxList>
      </div>
    );
  }
  handleInput(data) {
    this.setState({ count: this.state.count + 1 });
    this.setState({ currentInput: data })
    var listItem = { id: this.state.count, name: data, checked: false };
    var allItem = this.state.wishlist.concat([listItem]);
    this.setState({ wishlist: allItem })
  }
  addRow(event) {
    this.setState({ value: event.target.value });
  }
}

export default App;
