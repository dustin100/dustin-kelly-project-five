import React, { Component } from 'react';

class MovieCards extends Component {
	render() {
		return (
			<main className="movieResults">
				<div className="movieCards">
					<h3>Show Title</h3>
					<img
						src="https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
						alt="movie poster"
					/>
					<div className="quickInfo">
						<p className="watch">Save</p>
						<p className="type">TV</p>
						<p className="releaseYear">2000</p>
					</div>
				</div>
			</main>
		);
	}
}

export default MovieCards;
