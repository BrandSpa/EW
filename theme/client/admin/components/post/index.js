import React, { Component } from 'react';
import SingleUploader from '../singleUploader';
import GalleryUploader from '../galleryUploader';
import Uploader from '../uploader';
import Fields from '../fields';

class PostMetabox extends Component {
	state = {
		header: '',
		intro: ''
	}

	componentDidMount() {
		const state = { ...this.state, ...this.props };
		this.setState(state);
	}

	handleChange = (e) => {
  	console.log('handle change', e.target.name);
  	this.setState({ [e.target.name]: e.target.value });
  }

  render() {
  	const {
  		header,
			intro
  	} = this.state;

  	return (
  		<section>
  			<h4>Header</h4>
  			<hr />
  			<div className="form-group">
  				<SingleUploader
  					name="header"
  					imageId={header}
  				/>
				</div>
				<h4>Intro</h4>
				<textarea style={{width: '100%'}} rows="3" name="intro" placeholder="Intro" onChange={this.handleChange} value={intro} />
  		</section>
  	);
  }
}

export default PostMetabox;
