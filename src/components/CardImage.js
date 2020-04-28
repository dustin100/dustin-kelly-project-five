import React, { Component, Fragment } from 'react';
import Overlay from './Overlay';
import axios from 'axios';

class CardImage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			imdbID: this.props.imdbID,
			moreInfo: {},
			overlay: false,
		};
	}

	fetchData = async () => {
		try {
			const info = await axios.get('http://www.omdbapi.com/', {
				params: {
					apikey: '4790b397',
					i: this.state.imdbID,
				},
			});
			this.setState({
				moreInfo: info.data,
			});
		} catch (err) {
			console.log(err);
		}
	};

	// Update state when image is clicked and make the api call to get more details about item clicked
	handleImageClick = () => {
		this.setState({
			imdbID: this.props.imdbID,
			overlay: !this.state.overlay,
		});
		this.fetchData();
	};

	render() {
		const {
			Plot,
			Genre,
			Rated,
			Runtime,
			Title,
			imdbRating,
		} = this.state.moreInfo;
		let item;
		if (this.state.overlay === true) {
			item = (
				<Overlay
					plot={Plot}
					genre={Genre}
					rated={Rated}
					runtime={Runtime}
					title={Title}
					rating={imdbRating}
					handleImageClick={this.handleImageClick}
				/>
			);
		}
		const { poster, altText } = this.props;
		return (
			<Fragment>
				{item}
				<input
					onClick={this.handleImageClick}
					className="imgLink"
					type="image"
					alt={altText}
					src={poster}
				/>
			</Fragment>
		);
	}
}

export default CardImage;
