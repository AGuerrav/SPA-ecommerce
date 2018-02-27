import React, { Component } from 'react'
import Proptypes from 'prop-types' // Proptypes define que tipo son nuestras props
import {Item} from './item'

export class ItemList extends Component {
  static propTypes = {
    items: Proptypes.array // definimos a items como un array
  }
  render(){
    const {items} = this.props
    return (
      <div className = 'ItemList'>
      {
        items.map(element => {
          return (
          <div key={element.id} className='ItemList-item'>
            <Item 
     
              title={element.title}  // rescatamos los valores desde la API
              thumbnail={element.thumbnail}
              condition={element.condition}
              price={element.price}
            />
          </div>
          )
        })
      }
      </div>

    )
  }
}