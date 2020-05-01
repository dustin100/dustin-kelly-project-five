import React, { Component } from 'react';
import firebase from './firebase';

class SaveButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			saved: false,
			storedInfo: {},
		};
	}

	handleSaveClick = () => {
		this.setState(
			{
				saved: !this.state.saved,
				storedInfo: this.props,
			},
			this.saveDataToDb
		);
	};

	saveDataToDb = () => {
		const dbRef = firebase.database().ref();
		dbRef.push(this.state.storedInfo);
	};

	

	// returns true or false
	checkMatches = (id) => {
		return this.props.savedList.includes(id);

	}

	render() {
		return (
			<button onClick={this.handleSaveClick} className="watch saveBtn">
				Add to List{' '}
				{this.checkMatches(this.props.imdbID) ? (
					<i className="fas fa-heart"></i>
				) : (
					<i className="far fa-heart"></i>
				)}
			</button>
		);
	}
}

export default SaveButton;
