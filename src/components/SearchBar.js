import React, { Component } from 'react';

class SearchBar extends Component {
	render() {
		return (
			<section>
				<div className="wrapper searchBarArea">
					<label className="visuallyHidden" for="site-search">
						Search the site:
					</label>
					<input
						className="searchSite"
						type="search"
						id="site-search"
						name="q"
						placeholder="search for a movie or tv show"
						aria-label="Search through site content"
					></input>

					<button className="searchBtn" type="submit">
						Search
					</button>
				</div>
			</section>
		);
	}
}

export default SearchBar;
