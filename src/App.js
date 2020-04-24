import React, { Component } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MovieCards from './components/MovieCards';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header
					title="Movie List"
					tagLine="Find your favorite movies to watch later"
				/>
				<SearchBar />
				<MovieCards />
				<Footer companyName="Dustin Inc." />
			</div>
		);
	}
}

export default App;
