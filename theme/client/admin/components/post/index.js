import React, { Component } from 'react';
import SingleUploader from '../singleUploader';
import GalleryUploader from '../galleryUploader';
import Uploader from '../uploader';
import Fields from '../fields';

class PostMetabox extends Component {
	state = {
		header: '',
		intro: '',
		year: '',
		month: '',
		day: ''
	}

	componentDidMount() {
		const state = { ...this.state, ...this.props };
		this.setState(state);
	}

	handleChange = (e) => {
  	this.setState({ [e.target.name]: e.target.value });
  }

  render() {
  	const {
  		header,
			intro,
			day,
			month,
			year
  	} = this.state;
		const { months } = this.props;

  	return (
  		<section style={{padding: '10px'}}>
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
				<h4>Date</h4>
				<div style={{justifyContent: 'space-between', display: 'flex'}}>
					<input
						type="text"
						name="day"
						onChange={this.handleChange}
						placeholder="Day"
						style={{width: '32%', height: '40px'}}
						value={day}
					/>
					<select
						name="month"
						onChange={this.handleChange}
						style={{width: '32%', height: '40px'}}
						value={month}
					>
					<option value="">Month</option>
						{months.map(monthOpt =>
							<option value={monthOpt}>{monthOpt}</option>
						)}
					</select>
					<input
						type="text"
						name="year"
						onChange={this.handleChange}
						placeholder="Year"
						style={{width: '32%', height: '40px'}}
						 value={year}  />
				</div>
  		</section>
  	);
  }
}

export default PostMetabox;
