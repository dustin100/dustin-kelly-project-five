import React from 'react';
import { textToIcon } from './helpers';

const Cards = (props) => {
	return (
		<main className="cardWrapper wrapper">
			{props.list.map((item) => {
				return (
					<div className="cards" tabIndex="0" key={item.imdbID}>
						<div className="cardsTop">
							<h2>{item.Title}</h2>
						</div>
						<div className="cardsBottom">
							<a href="#" className="imgLink">
								<img src={item.Poster} alt="movie title poster" />
							</a>
							<div className="quickInfo">
								<button className="watch saveBtn">
									Add to List <i className="far fa-heart"></i>
								</button>
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
};

export default Cards;
