import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Loading from './components/Loading';

import './App.scss';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [],
			userInput: '',
		};
	}

	fetchData = async () => {
		try {
			const listRequest = await axios.get('http://www.omdbapi.com/', {
				params: {
					apikey: '4790b397',
					s: this.state.userInput ? this.state.userInput : 'star wars',
				},
			});
			this.setState({
				list: listRequest.data.Search,
			});
		} catch (err) {
			console.log(err);
		}
	};

	componentDidMount() {
		this.fetchData();
	}

	componentDidUpdate() {
		this.fetchData();
	}

	onSubmittedSearch = (userInput) => {
		this.setState({
			userInput: userInput,
		});
	};

	render() {
		console.log(this.state.list)
		return (
			<div className="App">
				<Header
					title="Free Time"
					tagLine="Find your favorite movies or tv shows to watch later when you have some free time"
				/>
				<SearchBar onSubmittedSearch={this.onSubmittedSearch} />

				{this.state.list.length ? (
					<Cards list={this.state.list} />
				) : (
					<Loading />
				)}
				<Footer companyName="Dustin" />
			</div>
		);
	}
}

export default App;
