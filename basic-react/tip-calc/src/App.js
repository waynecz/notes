import React, { Component } from 'react'
import './App.css'
import Span from './Span'
import PriceCount from './priceCount'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputs: [],
      count: 0.1
    }
    this.changeCount = this.changeCount.bind(this)
  }

  handleEnter(e) {
    if (!e.target.value) return
    if (e.keyCode === 13) {
      console.log('enter press here! ')
      const newPrice = e.target.value
      const newInputs = this.state.inputs.concat([newPrice])
      this.setState({ inputs: newInputs })
      e.target.value = ''
    }
  }

  changeCount(e) {
    this.setState({ count: Number(e.target.value) })
    console.log(this.state.count)
  }

  render() {
    const { inputs, count } = this.state

    console.log(inputs)
    const total = inputs.length
      ? inputs.reduce((t, num) => Number(t) + Number(num))
      : 0

    return (
      <div className="App">
        <p className="App-intro">Tip Caculator</p>
        <span>Enter Price: </span>{' '}
        <input
          type="number"
          className="PriceInput"
          onKeyUp={this.handleEnter.bind(this)}
        />

        <ul className="inputList">
          {inputs.map((e, i) => <PriceCount key={i} price={e} count={count} />)}
        </ul>

        <span>Total: {total}</span> /
        <span>{count * 100 + '% = ' + (total * count).toFixed(2)} </span>
        <select onChange={this.changeCount}>
          <option value="0.1">10%</option>
          <option value="0.15">15%</option>
          <option value="0.2">20%</option>
          <option value="0.3">30%</option>
        </select>
        <Span percentage="10% 15% 20% or 30%" result="result" />
      </div>
    )
  }
}

export default App
