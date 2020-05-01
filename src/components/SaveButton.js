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

	handleSaveClick = (e) => {
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

	// componentDidUpdate(props) {
	// 	const arrayOne = this.props.favIds;
	// 	const arrayTwo = this.props.searchIds;

	// 	const final = arrayOne.filter((element) => arrayTwo.includes(element));

	// 	console.log(final);

	// 	final.map((id) => {
	// 		if(this.props.imdbID === id) {
	// 			this.setState({
	// 				saved:true,
	// 			});
	// 		}
	// 	});
	// }

	render() {
		return (
			<button onClick={this.handleSaveClick} className="watch saveBtn">
				Add to List{' '}
				{this.state.saved ? (
					<i className="fas fa-heart"></i>
				) : (
					<i className="far fa-heart"></i>
				)}
			</button>
		);
	}
}

export default SaveButton;
