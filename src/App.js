import React, { Component } from 'react';
import MenuSection from './sections/menu.js'
import CatalogueSection from './sections/catalogue.js'
import './App.css';

class App extends Component {
	render() {
		return(
			<div className = 'App'>
				<MenuSection />
				<CatalogueSection />

			</div>
			)
	}
}

export default App;


