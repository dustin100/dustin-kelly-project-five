import React from 'react';

const Header = ({ title, tagLine, showFavs, toggleView }) => {
	return (
		<header>
			<div className="wrapper headContent">
				<h1>{title}</h1>
				<p className={toggleView ? 'hide' : 'show'}>{tagLine}</p>
				<div
					onClick={showFavs}
					className={toggleView ? 'userList trans' : 'userList'}
				>
					<button className="btn">{toggleView ? `Search` : `My List`}</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
