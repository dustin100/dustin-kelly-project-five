import React, { Component } from 'react';
import firebase from './firebase';

class SaveButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			saved: false,
		};
	}

	handleSaveClick = (e) => {
		this.setState({
			saved: !this.state.saved,
		});
	};

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
