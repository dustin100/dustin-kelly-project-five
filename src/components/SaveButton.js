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
			() => {
				this.state.saved === true ? this.saveDataToDb() : this.deleteItem();
			}
		);
	};

	saveDataToDb = () => {
		const dbRef = firebase.database().ref();
		dbRef.push(this.state.storedInfo);
	};

	deleteItem = () => {
		const dbRef = firebase.database().ref();
		dbRef.once('value', (snapshot) => {
			const data = snapshot.val();
			for (let firebaseKey in data) {
				if (data[firebaseKey].imdbID === this.props.imdbID) {
					const itemRef = firebase.database().ref(firebaseKey);
					itemRef.remove();
				}
			}
		});
	};

	// returns true or false
	checkMatches = (id) => {
		return this.props.savedList.includes(id);
	};

	componentDidMount() {
		if (this.checkMatches(this.props.imdbID)) {
			this.setState({ saved: true });
		}
	}

	render() {
		return (
			<button onClick={this.handleSaveClick} className="watch saveBtn">
				{this.checkMatches(this.props.imdbID) ? (
					<span className="savedToList">
						Saved <i className="fas fa-heart"></i>
					</span>
				) : (
					<span className ="addToList">
						Add to List <i className="far fa-heart"></i>
					</span>
				)}
			</button>
		);
	}
}

export default SaveButton;
