import React, { Component } from 'react';

class SearchBar extends Component {
	render() {
		return (
			<div className="SearchInput">
				<form action="">
					<input type="text" />
					<button className="btn" type="submit">
						Search
					</button>
				</form>
			</div>
		);
	}
}

export default SearchBar;
