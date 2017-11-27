import React, { Component } from 'react';
import uploader from '../../lib/uploader';
import GalleryUploader from './gallery_uploader';

class ProjectMB extends Component {
  state = {
    country: '',
    state: '',
    city: '',
    products: [''],
    brands: [''],
  }

  componentDidMount() {
    let state = this.state;
    if(Array.isArray(this.props.products) && this.props.products.length > 0) {
      state = {...state, products: this.props.products};
    }

    if(Array.isArray(this.props.brands) && this.props.brands.length > 0) {
      state = {...state, brands: this.props.brands};
    }

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
    const { country, state, city, products, brands } = this.state;
    const { countries, states, cities, brandsOptions, productsOptions } = this.props;

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
      <div>
        <h4>Products</h4>
        <hr/>
        {products.map((product, i) => {
          return (
            <div>
              <select 
                name={`products[${i}]`} 
                className="form-control" 
                value={product} 
                onChange={this.handleField.bind(null, 'products', i)}
              >
                <option value="">Product</option>
                {productsOptions.map(productOption =>
                  <option value={productOption}>{productOption}</option>
                )}
              </select>

              <button 
                className="button" 
                onClick={this.removeField.bind(null, 'products', i)}
              >Remove</button>
              <p></p>
              
              <p></p>
            </div>

          )
        })}
        <p>
          <button className="button" onClick={this.addField.bind(null, 'products')}>Add Product</button>
        </p>

      </div>

      <div>
        <h4>Brands</h4>
        <hr/>
        {brands.map((brand, i) => {
          return (
            <div className="form-group">
                <select name="brands[]" className="form-control" value={brand} onChange={this.handleField.bind(null, 'brands', i)}>
                  <option value="">Brand</option>
                  {brandsOptions.map(brandOption =>
                    <option value={brandOption}>{brandOption}</option>
                  )}
                </select>
                <button 
                  className="button" 
                  onClick={this.removeField.bind(null, 'brands', i)}
                >Remove</button>
                <p></p>
               
            </div>
          )
        })}
        <p>
          <button 
            className="button" 
            onClick={this.addField.bind(null, 'brands')}
          >Add Brand</button>
        </p>
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
