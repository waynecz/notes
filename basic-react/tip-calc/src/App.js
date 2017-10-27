import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Span from './Span';

class App extends Component {

  handleEnter = (e) => {
  	if(e.key === 'Enter'){
    	console.log('enter press here! ');
    	const li = React.createElement('li', {}, 'what entered');
    	const ul = document.getElementsByClassName('inputList');
    	// ul.appendChild(li);
    	const input = document.getElementsByClassName('PriceInput')[0];
    	input.innerHTML = "";
  	}
  }	


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Tip Caculator
        </p>
        <span>Enter Price: </span> <input className="PriceInput" onKeyUp={this.handleEnter}/>
        <ul className="inputList">
        </ul>
        <span>Total: </span>
        <span>total number</span>
        <select>
  			<option value="10">10%</option>
  			<option value="15">15%</option>
  			<option value="20">20%</option>
  			<option value="30">30%</option>
		</select>
		<Span percentage = '10% 15% 20% or 30%' result = 'result'></Span>
      </div>
    );
  }
}

export default App;
