import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import CardProduct from './product'

export class Item extends Component {
 static propTypes ={
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  condition: PropTypes.string,
  price: PropTypes.string
 }

 render(){

  const {thumbnail, title, condition, price} = this.props

  return (
    // <CardProduct/>
    <div className="thumbnail">
      <img className="img-responsive" src={thumbnail} alt={title} />
      <div className="caption">
        <h4>{title}</h4>
        <h5>Estado: {condition}</h5>
        <h3>${price}</h3>
      </div>
      <div className="Buy"><div className="label">+ Add to Cart</div></div>
    </div>
    )

  }
}

