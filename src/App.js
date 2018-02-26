import React, { Component } from 'react';
import MenuSection from './sections/menu.js'
import {SearchForm} from './sections/SearchForm'
import {ItemList} from './sections/itemList'

import './App.css';


class App extends Component {
  state = { results : [] }

_handleResults = (results) => {
  this.setState({ results })
}


  render() {
    return (
      <div className="App">
        <MenuSection />
        <div className="SearchForm-wrapper" >
          <SearchForm onResults={this._handleResults} />
        </div>
        {this.state.results.length === 0
          ? <p> Sin resultados</p>
          : <ItemList items={this.state.results} />
        }
      </div>
    );
  }
}

export default App;
