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
  state = { results : [] }

  _handleResults = (results) => {
    this.setState({ results })
}

  render() {
    return (
      <div className="App">
        <MenuSection />
        
        <div className='SearchForm-wrapper'>
          <SearchForm onResults={this._handleResults} />
        </div>
          {this.state.results.length === 0
          ? <CatalogueSection Category = { Category } />
          : <ItemList items = {this.state.results} />
        }
      </div>
    );
  }

}

export default App;


