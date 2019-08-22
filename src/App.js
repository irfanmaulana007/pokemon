import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

// Plugins
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'

// Components
import Navigation from './components/Navigation'
import NavigationBottom from './components/NavigationBottom'

// Views
import pokemonList from './views/pokemonList/index'
import pokemonDetail from './views/pokemonDetail/index'
import myPokemonList from './views/myPokemonList/index'

// Style
import './App.css'
// Font
import './assets/font.css'
import store from './services/store'


class App extends Component {
	constructor(props){
		super(props)
		this.state = null

		store.subscribe (() => {
			this.setState(store.getState().pokemon)
		})
	}

	render () {
		return (
			<Router>
				<Navigation />
				<NavigationBottom />

				<div id="content">
					<Route exact path="/pokemon/list" component={pokemonList} />
					<Route exact path="/pokemon/detail/:name" component={pokemonDetail} />
					<Route exact path="/pokemon/owned" component={myPokemonList} />
				</div>
			</Router>
		);
	}
}

export default App
