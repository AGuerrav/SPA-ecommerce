//Dependence
import React, { Component } from 'react';
import MenuSection from './sections/menu';
//Components
import CatalogueSection from './sections/catalogue';
import {SearchForm} from './sections/SearchForm';
import {ItemList} from './sections/itemList';
import './App.css';

// data
import Category from './assets/js/data'

class App extends Component {
  state = { results : [] } // Guardamos los resultados del llamado a la API

  _handleResults = (results) => { //monitorea los cambios en los resultados
    this.setState({ results })
}

  render() {
    return (
      <div className="App">
        <MenuSection />
        
        <div className='SearchForm-wrapper'>
          <SearchForm onResults={this._handleResults} />
        </div>
          {this.state.results.length === 0  //si el array de los resultado es 0 ->true
          ? <CatalogueSection Category = { Category } /> //solo se muestra la data base creada por nosotras
          : <ItemList items = {this.state.results} /> // si existen resultados entonces se muestran los elementos entregados por la API
        }
      </div>
    );
  }

}

export default App;


