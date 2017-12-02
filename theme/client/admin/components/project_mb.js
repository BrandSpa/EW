import React, { Component } from 'react';
import uploader from '../../lib/uploader';
import GalleryUploader from './gallery_uploader';

class ProjectMB extends Component {
  state = {
    country: '',
    state: '',
    city: '',
  }

  componentDidMount() {
    let state = this.state;
    
    state = {
      ...state, 
      country: this.props.country, 
      state: this.props.state, 
      city: this.props.city
    };

    this.setState(state);
    uploader();
  }

  addField = (type, e) => {
    e.preventDefault();
    const fields = [...this.state[type], ''];
    this.setState({ [type]: fields });
  }

  removeField = (type, index, e) => {
    e.preventDefault();
    let fields = this.state[type].filter((con, i) => i != index);
    this.setState({ [type]: fields });
  }

  handleField = (type, index, e) => {
    let fields = this.state[type];
    fields[index] = e.target.value;
    this.setState({ [type]: fields });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { country, state, city } = this.state;
    const { countries, states, cities } = this.props;

   return (
    <section>
      <h4>Location</h4>
      <hr/>
      <div className="form-group">
        <p>
        <select 
          name="country" 
          className="form-control" 
          onChange={this.handleChange} 
          value={country}
        >
          <option value="">Select country</option>
          {countries.map(countryOption =>
            <option name={countryOption} id="">{countryOption}</option>
          )}
        </select>
        </p>
      </div>

      <div className="form-group">
        <p>
        <select 
          name="state" 
          className="form-control" 
          onChange={this.handleChange} 
          value={state}
        >
          <option value="">Select state</option>
          {states.map(stateOption =>
            <option name={stateOption} id="">{stateOption}</option>
          )}
        </select>
        </p>
      </div>

      <div className="form-group">
        <select name="city" className="form-control" onChange={this.handleChange} value={city}>
          <option value="">Select city</option>
          {cities.map(cityOption => 
            <option value={cityOption}>{cityOption}</option>
          )}
        </select>
      </div>
    
      <h4>Gallery</h4>
      <hr/>
        <div className="form-group">
          <GalleryUploader />
        </div>
    </section>
   )
  }
}

export default ProjectMB;
