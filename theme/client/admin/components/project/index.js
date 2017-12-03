import React, { Component } from 'react';
import GalleryUploader from '../galleryUploader';
import SingleUploader from '../singleUploader';
import Location from './location';

class ProjectMetabox extends Component {
  state = {
    country: '',
    state: '',
    city: '',
    architect: []
  }

  componentDidMount() {
    let state = this.state;
    
    state = {
      ...state, 
      country: this.props.country, 
      state: this.props.state, 
      city: this.props.city,
      architect: this.props.architect
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
    let fields = this.state[type].filter((con, i) => i != index);
    this.setState({ [type]: fields });
  }

  handleField = (type, index, e) => {
    let fields = this.state[type];
    fields[index] = e.target.value;
    this.setState({ [type]: fields });
  }

  handleChange = (e) => {
    console.log('handle change', e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { country, state, city, architect } = this.state;
    const { countries, states, cities } = this.props;

   return (
    <section>
      <h4>Location</h4>
      <hr/>
      <Location 
        {...this.state} 
        countries={countries}
        cities={cities}
        states={states}
        handleChange={this.handleChange}
      />
      <h4>Header</h4>
      <hr/>
      <div className="form-group">
        <SingleUploader name="header" />
      </div>
      <h4>Slider</h4>
      <hr/>
      <div className="form-group">
        <GalleryUploader name="slider" />
      </div>
      <h4>Arquitect</h4>
      <div className="form-group">
        {architect.map((architectItem, i) => 
          <section className="field">
            <input 
              type="text" 
              name="architect[]" 
              onChange={(e) => this.handleField('architect', i, e)} 
              value={architectItem}
            />
            <button 
              className="button btn-remove" 
              onClick={(e) => this.removeField('architect', i, e)}
            >remove Arquitect</button>
          </section>
        )}
      </div>
      <button className="button" onClick={(e) => this.addField('architect', e)}>Add Arquitect</button>
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
      `}</style>
    </section>
   )
  }
}

export default ProjectMetabox;
