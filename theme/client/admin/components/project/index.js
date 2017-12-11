import React, { Component } from 'react';
import GalleryUploader from '../galleryUploader';
import SingleUploader from '../singleUploader';
import Location from './location';
import Fields from './fields';

class ProjectMetabox extends Component {
  state = {
  	country: '',
  	state: '',
  	city: '',
  	header: '',
  	slider: '',
  	architect: [],
  	constructor: [],
  	developer: [],
  	systems: [],
  	aluminum: [],
  	glass: [],
  }

  componentDidMount() {
  	let { state } = this;
  	const {
  		country,
  		city,
  		header,
  		slider,
  		architect,
  		constructor,
  		developer,
  		systems,
  		aluminum,
  		glass,
  	} = this.props;

  	state = {
  		...state,
  		country,
  		city,
  		header,
  		slider,
  		architect,
  		constructor,
  		developer,
  		systems,
  		aluminum,
  		glass,
  		state: this.props.state,
  	};

  	this.setState(state);
  }

  addField = (type, e) => {
  	e.preventDefault();
  	const fields = [...this.state[type], ''];
  	this.setState({ [type]: fields });
  }

  removeField = (type, index, e) => {
  	e.preventDefault();
  	const fields = this.state[type].filter((con, i) => i != index);
  	this.setState({ [type]: fields });
  }

  handleField = (type, index, e) => {
  	const fields = this.state[type];
  	fields[index] = e.target.value;
  	this.setState({ [type]: fields });
  }

  handleChange = (e) => {
  	console.log('handle change', e.target.name);
  	this.setState({ [e.target.name]: e.target.value });
  }

  render() {
  	const {
  		country,
  		city,
  		state,
  		header,
  		slider,
  		architect,
  		constructor,
  		developer,
  		systems,
  		aluminum,
  		glass,
  	} = this.state;
  	const { countries, states, cities } = this.props;

  	return (
  		<section>
  			<h4>Location</h4>
  			<hr />
  			<Location
  				{...this.state}
  				countries={countries}
  				cities={cities}
  				states={states}
  				handleChange={this.handleChange}
  			/>
  			<h4>Header</h4>
  			<hr />
  			<div className="form-group">
  				<SingleUploader name="header" imageId={header} />
  			</div>
  			<h4>Slider</h4>
  			<hr />
  			<div className="form-group">
  				<GalleryUploader name="slider" galleryIds={slider} />
  			</div>
  			<h4>Architect</h4>
  			<hr />
  			<Fields
  				type="architect"
  				handleField={this.handleField}
  				removeField={this.removeField}
  				addField={this.addField}
  				data={architect}
  			/>
  			<h4>Constructor</h4>
  			<hr />
  			<Fields
  				type="constructor"
  				handleField={this.handleField}
  				removeField={this.removeField}
  				addField={this.addField}
  				data={constructor}
  			/>
  			<h4>Developer</h4>
  			<hr />
  			<Fields
  				type="developer"
  				handleField={this.handleField}
  				removeField={this.removeField}
  				addField={this.addField}
  				data={developer}
  			/>
  			<h4>Systems</h4>
  			<hr />
  			<Fields
  				type="systems"
  				handleField={this.handleField}
  				removeField={this.removeField}
  				addField={this.addField}
  				data={systems}
  			/>
  			<h4>Aluminum</h4>
  			<hr />
  			<Fields
  				type="aluminum"
  				handleField={this.handleField}
  				removeField={this.removeField}
  				addField={this.addField}
  				data={aluminum}
  			/>
  			<h4>Glass</h4>
  			<hr />
  			<Fields
  				type="glass"
  				handleField={this.handleField}
  				removeField={this.removeField}
  				addField={this.addField}
  				data={glass}
  			/>
  			<style jsx>{`
        input, select {
          display: block;
          width: 100%;
          height: 35px;
          margin-bottom: 15px;
        }

        .field {
          margin-bottom: 30px;
          float: left;
          width: 100%;
        }

        .btn-remove {
          float: right;
        }
      `}
  			</style>
  		</section>
  	);
  }
}

export default ProjectMetabox;
