import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Cards from './components/Cards';
import Footer from './components/Footer';
import NoResults from './components/NoResults';
import firebase from './components/firebase';

import './App.scss';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [],
			userInput: '',
			favList: [],
			toggleView: false,
		};
	}

	fetchData = async () => {
		try {
			const listRequest = await axios.get('https://www.omdbapi.com/', {
				params: {
					apikey: '4790b397',
					s: this.state.userInput,
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
		// grabs data from firebase and coverts the object into an array and adds it to state
		const dbRef = firebase.database().ref();
		dbRef.on('value', (result) => {
			const data = result.val();
			const favsInArray = [];
			for (let key in data) {
				favsInArray.push(data[key]);
			}

			this.setState({
				favList: favsInArray,
			});
		});
	}

	onSubmittedSearch = (userInput) => {
		this.setState(
			{
				userInput: userInput,
				toggleView: false,
			},
			() => {
				this.fetchData();
			}
		);
	};

	showFavs = () => {
		this.setState({ toggleView: !this.state.toggleView });
	};

	render() {
		const { toggleView, favList, list, userInput } = this.state;
		return (
			<div className={toggleView ? 'listPage' : 'homePage'}>
				<Header
					title="Free Time"
					tagLine="Find your favorite movies or tv shows to watch later when you have some free time"
					showFavs={this.showFavs}
					toggleView={toggleView}
				/>
				<SearchBar
					onSubmittedSearch={this.onSubmittedSearch}
					toggleView={toggleView}
				/>

				{list ? (
					<Cards
						list={toggleView ? favList : list}
						pageTitle={toggleView ? 'My Watch List' : 'Search Results'}
						savedList={this.state.favList.map((item) => item.imdbID)}
					/>
				) : (
					<NoResults userInput={userInput} />
				)}
				<Footer companyName="Dustin" />
			</div>
		);
	}
}

export default App;
