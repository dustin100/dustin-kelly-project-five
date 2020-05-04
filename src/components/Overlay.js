import React, { Component } from 'react';

class Overlay extends Component {
	closeOverlay = () => {
		this.props.handleImageClick();
	};

	render() {
		const {
			plot,
			genre,
			rated,
			runtime,
			title,
			rating,
		} = this.props;
		return (
			<div className="showOverlay">
				<div className="wrapper">
					<h3 className="fullTitle">{title}</h3>
					<ul className="showDetails">
						<li>{rated}</li>
						<li>{runtime}</li>
						<li>{genre}</li>
						<li>
							{rating}
							<span className="ratingStar">
								<i className="fas fa-star"></i>
							</span>
						</li>
					</ul>
					<p className="showDesc">{plot}</p>
					<button className="closeOverlay" onClick={this.closeOverlay}>
						<i className="far fa-times-circle"></i>
					</button>
				</div>
			</div>
		);
	}
}

export default Overlay;
