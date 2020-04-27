import React, { Component } from 'react';

class SearchBar extends Component {
	constructor() {
		super();
		this.state = {
			searchQ: '',
		};
	}

	handleChange = (e) => {
		this.setState({
			searchQ: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmittedSearch(this.state.searchQ);
	};

	render() {
		return (
			<section>
				<div className="wrapper searchBarArea">
					<form onSubmit={this.handleSubmit}>
						<label className="visuallyHidden" htmlFor="site-search">
							Search the site:
						</label>
						<input
							className="searchSite"
							type="search"
							id="site-search"
							name="q"
							placeholder="search for a movie or tv show"
							aria-label="Search through site content"
							value={this.state.inputValue}
							onChange={this.handleChange}
						/>

						<button className="searchBtn" type="submit">
							Search
						</button>
					</form>
				</div>
			</section>
		);
	}
}

export default SearchBar;
