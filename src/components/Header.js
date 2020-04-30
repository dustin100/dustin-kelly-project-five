import React from 'react';


const Header = ( {title, tagLine, showFavs}) => {
	
	return (
		<header>
			<div className="wrapper headContent">
				<h1>{title}</h1>
				<p>{tagLine}</p>
				<div onClick= {showFavs} className="userList">
					<i className="fas fa-th-list"></i>
				</div>
			</div>
		</header>
	);
};

export default Header;
