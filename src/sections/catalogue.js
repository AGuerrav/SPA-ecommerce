//Dependece
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Assets
//import './css/Catalogue.css';

export default class CatalogueSection extends Component {
	static propTypes = {
		name: PropTypes.string.isRequired,
    Category: PropTypes.array.isRequired

	}
  render(){
    const { title, Category } = this.props;
    console.log(this.props);
    return(
    	<div className = 'cat'>
          { Category && Category.map((Category, key) => <div key = { key }> 
                <img src = { Category.img } />
                <h3>{ Category.name }</h3>
                <p>{ Category.info }</p>
                <p>{ Category.precio }</p>
                </div>)}
        </div>
    	


    	)
	}
}