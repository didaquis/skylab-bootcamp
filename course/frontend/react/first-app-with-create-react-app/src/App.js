import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld.js';
import DataFromJSON from './components/DataFromJSON.js';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>

				<HelloWorld />

				<DataFromJSON />
			</div>
		);
	}
}

export default App;
