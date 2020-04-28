import React from 'react';

// Changes text into icons
const textToIcon = (item) => {
	return item === 'movie' ? (
		<i className="fas fa-film"></i>
	) : (
		<i className="fas fa-tv"></i>
	);
};
export const defaultImage = (image) => {
	return image.length > 5 ? image : '../assets/no-poster-available.jpg';
};

export default textToIcon;
