import React from 'react';

const NoResults = ({ userInput }) => {
	return (
		<div className="tryAgain">
			<h3>Sorry we couldn't find {userInput} </h3>
			<p>Check your spelling or try a simpler search</p>
		</div>
	);
};

export default NoResults;
