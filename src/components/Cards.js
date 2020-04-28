import React, { Component } from 'react';
import Button from './SaveButton'
import firebase from './firebase';
import textToIcon, { defaultImage } from './helpers';

class Cards extends Component {
	constructor(props) {
		super(props);
		this.state = {
			OverLay: false,
		};
	}

	

	render() {
		return (
			<main className="cardWrapper wrapper">
				{this.props.list.map((item) => {
					return (
						<div className="cards" tabIndex="0" key={item.imdbID}>
							<div className="cardsTop">
								<h2>{item.Title}</h2>
							</div>
							<div className="cardsBottom">
								{/* <a href="#" className="imgLink">
									<img
										src={defaultImage(item.Poster)}
										alt="movie title poster"
									/>
								</a> */}
								<input className="imgLink" type="image" src={item.Poster} />
								<div className="quickInfo">
									{<Button />}
									<p className="type">{textToIcon(item.Type)}</p>
									<p className="releaseYear">{item.Year}</p>
								</div>
								<div className="infoIcon">
									<i className="fas fa-info-circle"></i>
								</div>
							</div>
						</div>
					);
				})}
			</main>
		);
	}
}

export default Cards;
