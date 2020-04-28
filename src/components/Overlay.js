import React, { Component } from 'react';

class Overlay extends Component {
	constructor(props) {
		super(props);
	}
	closeOverlay = () => {
		this.props.handleImageClick();
	};

	render() {
		const { plot, genre, rated, runtime, title, rating } = this.props;
		return (
			<div className="showOverlay">
				<h2>{title}</h2>
				<ul className="showDetails">
					<li>{rated}</li>
					<li>{runtime}</li>
					<li>{genre}</li>
					<li>{rated}</li>
				</ul>
				<p className="showDesc">{plot}</p>
				<button onClick={this.closeOverlay}>close</button>
			</div>
		);
	}
}

export default Overlay;
