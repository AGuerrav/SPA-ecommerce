import React, { Component } from 'react'


export class SearchForm extends Component {
  state = {
    inputCatalogue:''
  }

  _handleChange = (e) => {
    this.setState({inputCatalogue: e.target.value})
  }
  _handleSubmit = (e) =>{
    e.preventDefault()
    const {inputCatalogue} = this.state
    fetch(`https://api.mercadolibre.com/sites/MLC/search?q=${inputCatalogue}`)
    .then(res => res.json())
    .then(hola => {
      const {results} = hola
      console.log(results)
      this.props.onResults(results)
    })
  }
  render(){
    return(

      <form onSubmit = {this._handleSubmit}>
        <div className="input-append">
          <input onChange={this._handleChange} type="text" className="span2"  size="120"placeholder="¿Qué andas buscando?" />
          <button className="btn">Search</button>
        </div>
      </form>
    
    )
  }
}