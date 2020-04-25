import React, { Component } from 'react';

class Cards extends Component {
	render() {
		return (
			<main className="cardWrapper wrapper">
				{/* This is a placeholder for the api content */}
				<div className="cards">
					<h2>Show Title</h2>
					<a href="#">
						<img
							src="https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
							alt="movie title poster"
						/>
					</a>
					<div className="quickInfo">
						<button className="watch saveBtn">
							Add to List <i class="far fa-heart"></i>
						</button>
						<p className="type">
							<i class="fas fa-film"></i>
						</p>
						<p className="releaseYear">2000</p>
					</div>
					<div className="infoIcon">
						<i class="fas fa-info-circle"></i>
					</div>
				</div>
				<div className="cards">
					<h2>Show Title</h2>
					<a href="#">
						<img
							src="https://m.media-amazon.com/images/M/MV5BMTRmYzNmOTctZjMwOS00ODZlLWJiZGQtNDg5NDY5NjE3MTczXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
							alt="movie title poster"
						/>
					</a>
					<div className="quickInfo">
						<button className="watch saveBtn">
							In List <i class="fas fa-heart"></i>
						</button>
						<p className="type">
							<i class="fas fa-tv"></i>
						</p>
						<p className="releaseYear">2000</p>
					</div>
					<div className="infoIcon">
						<i class="fas fa-info-circle"></i>
					</div>
				</div>
				<div className="cards">
					<h2>Show Title</h2>
					<a href="#">
						<img
							src="https://m.media-amazon.com/images/M/MV5BYTExZTljMDYtODQ3My00MWFhLWJmMTMtOGUwMzNmN2FiZGVhXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
							alt="movie title poster"
						/>
					</a>
					<div className="quickInfo">
						<button className="watch saveBtn">
							Add to List <i class="far fa-heart"></i>
						</button>
						<p className="type">
							<i class="fas fa-film"></i>
						</p>
						<p className="releaseYear">2000</p>
					</div>
					<div className="infoIcon">
						<i class="fas fa-info-circle"></i>
					</div>
				</div>
				<div className="cards">
					<h2>Show Title</h2>
					<a href="#">
						<img
							src="https://m.media-amazon.com/images/M/MV5BMjE5NDQ5OTE4Ml5BMl5BanBnXkFtZTcwOTE3NDIzMw@@._V1_SX300.jpg"
							alt="movie title poster"
						/>
					</a>
					<div className="quickInfo">
						<button className="watch saveBtn">
							Add to List <i class="far fa-heart"></i>
						</button>
						<p className="type">
							<i class="fas fa-film"></i>
						</p>
						<p className="releaseYear">2000</p>
					</div>
					<div className="infoIcon">
						<i class="fas fa-info-circle"></i>
					</div>
				</div>
			</main>
		);
	}
}

export default Cards;
