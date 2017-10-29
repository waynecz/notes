import React, { Component } from 'react'

class priceCount extends Component {
  constructor(props) {
    super(props)
  }

  handleInput(e) {
		this.setState({price: e.target.value})
  }

  render() {
    const { count, price } = this.props

    return (
      <div className="xxxx">
        <input readOnly type="number" value={price} onChange={this.handleInput.bind(this)} />
        <span>{count * 100 + '% = ' + `${(price * count).toFixed(2)}`}</span>
      </div>
    )
  }
}

export default priceCount
