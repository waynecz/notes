import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';



class App extends Component {
    constructor() {
      super();
      this.state = {
        count: 0
      };
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      const count = this.state.count;
      this.setState({
        count: count + 1
      });
      
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.state.count}
        <Button children = 'Add' onClick={this.handleClick}></Button>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
