import React, { Component } from 'react';
import SingleUploader from '../singleUploader';
import GalleryUploader from '../galleryUploader';
import Fields from '../fields';

class ProductMetabox extends Component {
	state = {
		header: '',
		slider: '',
		systemDescription: [],
		features: [],
	}

	componentDidMount() {
		const state = { ...this.state, ...this.props };
		this.setState(state);
	}

	addField = (type, e) => {
  	e.preventDefault();
  	const fields = [...this.state[type], ''];
  	this.setState({ [type]: fields });
	}

  removeField = (type, index, e) => {
  	e.preventDefault();
  	const fields = this.state[type].filter((con, i) => i !== index);
  	this.setState({ [type]: fields });
  }

  handleField = (type, index, e) => {
  	const fields = this.state[type];
  	fields[index] = e.target.value;
  	this.setState({ [type]: fields });
  }


  render() {
  	const {
  		header, slider, systemDescription, features,
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
  			<h4>Gallery</h4>
  			<hr />
  			<GalleryUploader
  				name="slider"
  				galleryIds={slider}
  			/>
  			<h4>System Description</h4>
  			<Fields
  				type="systemDescription"
  				handleField={this.handleField}
  				removeField={this.removeField}
  				addField={this.addField}
  				data={systemDescription}
  			/>
  			<h4>Features</h4>
  			<Fields
  				type="features"
  				handleField={this.handleField}
  				removeField={this.removeField}
  				addField={this.addField}
  				data={features}
  			/>
  		</section>
  	);
  }
}

export default ProductMetabox;
