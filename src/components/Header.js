import React from 'react';


const Header = ({ title, tagLine, showFavs, toggleView }) => {
	
	
	return (
		<header>
			<div className="wrapper headContent">
				<h1>{title}</h1>
				<p>{tagLine}</p>
				<div onClick={showFavs}  className="userList">
					<button className="btn">{toggleView ? `Home` : `My List`}</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
