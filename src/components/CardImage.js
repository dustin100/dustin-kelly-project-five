import React, { Component } from 'react';

class CardImage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<input
				className="imgLink"
				type="image"
				alt={this.props.altText}
				src={this.props.poster}
			/>
		);
	}
}

export default CardImage;
