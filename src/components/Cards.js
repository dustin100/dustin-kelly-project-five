import React from 'react';
import CardImage from './CardImage';
import SaveButton from './SaveButton';
import textToIcon, { defaultImage } from './helpers';

const Cards = (props) => {
	return (
		<main className="cardWrapper wrapper">
			{props.list.map(({ Title, imdbID, Poster, Type, Year }) => {
				return (
					<div className="cards" tabIndex="0" key={imdbID}>
						<div className="cardsTop">
							<h2>{Title}</h2>
						</div>
						<div className="cardsBottom">
							{<CardImage altText={Title} poster={Poster} imdbID={imdbID} />}
							<div className="quickInfo">
								{
									<SaveButton
										imdbID={imdbID}
										Title={Title}
										Poster={Poster}
										Type={Type}
										Year={Year}
									/>
								}
								<p className="type">{textToIcon(Type)}</p>
								<p className="releaseYear">{Year}</p>
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
};

export default Cards;
