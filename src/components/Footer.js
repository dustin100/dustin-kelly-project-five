import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<footer>
				<p>Made by {this.props.companyName}</p>
			</footer>
		);
	}
}

export default Footer;
