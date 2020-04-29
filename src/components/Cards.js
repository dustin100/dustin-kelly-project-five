import React, { Component } from 'react';
import CardImage from './CardImage';
import SaveButton from './SaveButton';
import textToIcon, { defaultImage } from './helpers';

class Cards extends Component {
	constructor(props) {
		super(props);
		
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
								{
									<CardImage
										altText={item.Title}
										poster={item.Poster}
										imdbID={item.imdbID}
									/>
								}
								<div className="quickInfo">
									{<SaveButton />}
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
