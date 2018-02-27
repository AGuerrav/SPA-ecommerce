import React, { Component } from 'react'


export class SearchForm extends Component {
  state = {
    inputCatalogue:'' //lo que el usuario pone en el input
  }

  _handleChange = (e) => {
    this.setState({inputCatalogue: e.target.value}) //actualiza el estado , toma el valor del input
  }
  _handleSubmit = (e) =>{
    e.preventDefault() // previene el evento nativo del submit
    const {inputCatalogue} = this.state // guardamos en la variable el valor del input
    fetch(`https://api.mercadolibre.com/sites/MLC/search?q=${inputCatalogue}`) // hacemos llamado a la API con la variable
    .then(res => res.json())
    .then(hola => {
      const {results} = hola 
      console.log(results)
      this.props.onResults(results)
    })
  }
  render(){
    return( //onchange a input para monitoriar los cambios y pasamos el evento handlechange
      // a traves de onSubmit pasamos el evento handleSubmit (se ejecuta cada vez que hacemos submit un llamado a la API)
      <form onSubmit = {this._handleSubmit}> 
        <div className="input-append"> 
          <input onChange={this._handleChange} type="text" className="span2"  size="120"placeholder="¿Qué andas buscando?" />
          <button className="btn">Search</button>
        </div>
      </form>
    
    )
  }
}