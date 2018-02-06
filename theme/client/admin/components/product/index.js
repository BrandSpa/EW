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
  			<input type="text" name="titleBlueprints" defaultValue="Pdf Blueprints"/>
  			<Uploader name="pdfBlueprints" url={pdfBlueprints} />
			<input type="text" name="titleInstallationGuide" defaultValue="Pdf Installation Guide"/>
  			<Uploader name="pdfInstallationGuide" url={pdfInstallationGuide} />
			<input type="text" name="titleEliteBrandBrochure1" defaultValue="Pdf Elite Brand Brochure"/>
  			<Uploader name="pdfEliteBrandBrochure1" url={pdfEliteBrandBrochure1} />
			<input type="text" name="titleEliteBrandBrochure2" defaultValue="Pdf Elite Brand Brochure"/>
  			<Uploader name="pdfEliteBrandBrochure2" url={pdfEliteBrandBrochure2} />
  		</section>
  	);
  }
}

export default ProductMetabox;
