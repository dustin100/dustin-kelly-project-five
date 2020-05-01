import React from 'react';
import CardImage from './CardImage';
import SaveButton from './SaveButton';
import posterDefault from '../assets/no-poster-available.jpg';


// Changes text into icons
const textToIcon = (item) => {
	return item === 'movie' ? (
		<i className="fas fa-film"></i>
	) : (
			<i className="fas fa-tv"></i>
		);
};
// if poster is missing adds a default image
const defaultImage = (image) => {
	return image.length > 5 ? image : posterDefault;
};

// renders each card based props passed from app.js
const Cards = (props) => {
	return (
		<main className=" wrapper">
			<h3 className="pageTitle">{props.pageTitle}</h3>
			<div className="cardWrapper">
				{props.list.map(({ Title, imdbID, Poster, Type, Year }) => {
					return (
						<div className="cards" tabIndex="0" key={imdbID}>
							<div className="cardsTop">
								<h2>{Title}</h2>
							</div>
							<div className="cardsBottom">
								{
									<CardImage
										altText={Title}
										poster={defaultImage(Poster)}
										imdbID={imdbID}
										savedList={props.savedList}
									/>
								}
								<div className="quickInfo">
									{
										<SaveButton
											imdbID={imdbID}
											Title={Title}
											Poster={Poster}
											Type={Type}
											Year={Year}
											savedList={props.savedList}
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
			</div>
		</main>
	);
};

export default Cards;
