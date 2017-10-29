import React, { Component } from 'react'

class priceCount extends Component {
  constructor(props) {
    super(props)
	}
	
  render() {
    const { count, price } = this.props

    return (
      <div className="xxxx">
        <input readOnly type="number" value={price}/>
        <span>{count * 100 + '% = ' + `${(price * count).toFixed(2)}`}</span>
      </div>
    )
  }
}

export default priceCount
