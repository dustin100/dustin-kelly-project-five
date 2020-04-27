import React from 'react';

// Changes text into icons
export const textToIcon = (item) =>
	item === 'movie' ? (
		<i className="fas fa-film"></i>
	) : (
		<i className="fas fa-tv"></i>
	);
