import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
    <div className="thumbnail">
      <img className="img-responsive" src={thumbnail} alt={title} />
      <div className="caption">
        <h2>{title}</h2>
        <h3>{condition}</h3>
        <h3>${price}</h3>
      </div>
    </div>
    )
  }
}