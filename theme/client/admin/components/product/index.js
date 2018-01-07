import React, { Component } from 'react';
import SingleUploader from '../singleUploader';
import GalleryUploader from '../galleryUploader';
import Uploader from '../uploader';
import Fields from '../fields';

class ProductMetabox extends Component {
	state = {
		header: '',
		slider: '',
		systemDescription: [],
		features: [],
		pdfBlueprints: '',
  	pdfInstallationGuide: '',
  	pdfEliteBrandBrochure1: '',
  	pdfEliteBrandBrochure2: '',
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
  		header,
  		slider,
  		systemDescription,
  		features,
  		pdfBlueprints,
  		pdfInstallationGuide,
  		pdfEliteBrandBrochure1,
  		pdfEliteBrandBrochure2,
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
  			<h4>Pdf Blueprints</h4>
  			<Uploader name="pdfBlueprints" url={pdfBlueprints} />
  			<h4>Pdf Installation Guide</h4>
  			<Uploader name="pdfInstallationGuide" url={pdfInstallationGuide} />
  			<h4>Pdf Elite Brand Brochure</h4>
  			<Uploader name="pdfEliteBrandBrochure1" url={pdfEliteBrandBrochure1} />
  			<h4>Pdf Elite Brand Brochure</h4>
  			<Uploader name="pdfEliteBrandBrochure2" url={pdfEliteBrandBrochure2} />
  		</section>
  	);
  }
}

export default ProductMetabox;
