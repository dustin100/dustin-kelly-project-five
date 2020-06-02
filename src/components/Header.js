import React, {useState} from 'react';

const Header = ( {title, tagLine, showFavs}) => {

	const [text, setText] = useState(false);
	const toggleTrueFalse = () => setText(!text);
	
	return (
		<header>
			<div className="wrapper headContent">
				<h1>{title}</h1>
				<p>{tagLine}</p>
				<div onClick={showFavs} className="userList">
					<p className="aboveBtn">Go to</p>
					<button className="btn" onClick={toggleTrueFalse}>
						{text ? `My List` : `Search Results`}
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
