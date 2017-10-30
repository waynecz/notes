import React, { Component } from 'react'

class priceCount extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputPrice: undefined
    }
  }

  formatWatYouInput = value => {
    let number = Number(value)
    let string = value.toString()
    if (string.includes('.') && string.length - string.indexOf('.') > 3) {
      return number.toFixed(2)
    }
    return number
  }

  handleInput(e) {
    let value = this.formatWatYouInput(e.target.value)
    e.target.value = value

    this.setState({
      inputPrice: Number(value)
		})
		
		this.props.changePrice(value)
  }

  render() {
    let { count, price } = this.props

    const exactPrice =
      this.state.inputPrice === undefined ? price : this.state.inputPrice

    return (
      <div className="xxxx">
        <input
          type="number"
          min="0"
          value={exactPrice}
          onChange={this.handleInput.bind(this)}
        />
        <span>
          {count * 100 + '% = ' + `${(exactPrice * count).toFixed(2)}`}
        </span>
      </div>
    )
  }
}

export default priceCount
