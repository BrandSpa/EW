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
		titleBlueprints: '',
		pdfBlueprints: '',
		titleInstallationGuide: '',
		pdfInstallationGuide: '',
		titleEliteBrandBrochure1: '',
		pdfEliteBrandBrochure1: '',
		titleEliteBrandBrochure2: '',
		pdfEliteBrandBrochure2: '',
	}

	componentDidMount() {
		console.log(this.props);
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

  handleTitles = ( e ) => {
	  this.setState({ [e.target.name] : e.target.value });
  }

  render() {
  	const {
  		header,
  		slider,
  		systemDescription,
		features,
		titleBlueprints,
		pdfBlueprints,
		titleInstallationGuide,
		pdfInstallationGuide,
		titleEliteBrandBrochure1,
		pdfEliteBrandBrochure1,
		titleEliteBrandBrochure2,
  		pdfEliteBrandBrochure2,
  	} = this.state;
	console.log(titleInstallationGuide, titleEliteBrandBrochure1, titleEliteBrandBrochure2, titleBlueprints);
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
  			<input type="text" name="titleBlueprints" onchange={e => this.handleTitles(e)} defaultValue={this.props.titleBlueprints!=""?this.props.titleBlueprints:"Pdf Blueprints"}/>
  			<Uploader name="pdfBlueprints" url={pdfBlueprints} />
			<input type="text" name="titleInstallationGuide" onchange={e => this.handleTitles(e)}  defaultValue={this.props.titleInstallationGuide!=""?this.props.titleInstallationGuide:"Pdf Installation Guide"}/>
  			<Uploader name="pdfInstallationGuide" url={pdfInstallationGuide} />
			<input type="text" name="titleEliteBrandBrochure1"  onchange={e => this.handleTitles(e)}  defaultValue={this.props.titleEliteBrandBrochure1!=""?this.props.titleEliteBrandBrochure1:"Pdf Elite Brand Brochure"}/>
  			<Uploader name="pdfEliteBrandBrochure1" url={pdfEliteBrandBrochure1} />
			<input type="text" name="titleEliteBrandBrochure2" onchange={e => this.handleTitles(e)}  defaultValue={this.props.titleEliteBrandBrochure2!=""?this.props.titleEliteBrandBrochure2:"Pdf Elite Brand Brochure"}/>
  			<Uploader name="pdfEliteBrandBrochure2" url={pdfEliteBrandBrochure2} />
  		</section>
  	);
  }
}

export default ProductMetabox;
