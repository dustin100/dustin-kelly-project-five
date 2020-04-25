import React from 'react';

const Header = ({ title, tagLine }) => {
	return (
		<header>
			<div className="wrapper headContent">
				<h1>{title}</h1>
				<p>{tagLine}</p>
			</div>
		</header>
	);
};

export default Header;
