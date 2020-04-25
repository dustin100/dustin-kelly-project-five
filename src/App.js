import React, { Component } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Cards from './components/Cards';
import Footer from './components/Footer';
import './App.scss';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header
					title="Free Time"
					tagLine="Find your favorite movies or tv shows to watch later when you have some free time"
				/>
				<SearchBar />
				<Cards />
				<Footer companyName="Dustin" />
			</div>
		);
	}
}

export default App;
