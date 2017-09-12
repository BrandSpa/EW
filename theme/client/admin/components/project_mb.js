import React, { Component } from 'react';

class ProjectMB extends Component {
  state = {
    country: '',
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

    state = {...state, country: this.props.country, city: this.props.city};

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
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { country, city, products, brands } = this.state;
    const { countries, brandsOptions, productsOptions } = this.props;

   return (
    <div>
      <h3>Location</h3>
      <div className="form-group">
        <p>
        <select name="country" className="form-control" onChange={this.handleChange} value={country}>
          <option value="">Select country</option>
          {countries.map(countr =>
            <option name={countr} id="">{countr}</option>
          )}
        </select>
        </p>
      </div>

      <div className="form-group">
        <select name="city" className="form-control" onChange={this.handleChange} value={city}>
          <option value="">Select City</option>
          <option value="Bogotá">Bogotá</option>
          <option value="Buenos aires">Buenos aires</option>
          <option value="Miami">Miami</option>
          <option value="New york">New york</option>
          <option value="Lima">Lima</option>
        </select>
      </div>
      <div>
        <h3>Products</h3>
        {products.map((product, i) => {
          return (
            <div>
              <select name="products[]" className="form-control" value={product} onChange={this.handleField.bind(null, 'products', i)}>
                <option value="">Product</option>
                {productsOptions.map(productOption =>
                  <option value={productOption}>{productOption}</option>
                )}
              </select>

              <button className="button" onClick={this.removeField.bind(null, 'products', i)}>Remove</button>
              <p></p>
              <hr/>
              <p></p>
            </div>

          )
        })}
        <p>
          <button className="button" onClick={this.addField.bind(null, 'products')}>Add Product</button>
        </p>

      </div>

      <div>
        <h3>Brands</h3>
        {brands.map((brand, i) => {
          return (
            <div className="form-group">
                <select name="brands[]" className="form-control" value={brand} onChange={this.handleField.bind(null, 'brands', i)}>
                  <option value="">Brand</option>
                  {brandsOptions.map(brandOption =>
                    <option value={brandOption}>{brandOption}</option>
                  )}
                </select>
                <button className="button" onClick={this.removeField.bind(null, 'brands', i)}>Remove</button>
                <p></p>
                <hr/>
                <p></p>
            </div>
          )
        })}
        <p>
          <button className="button" onClick={this.addField.bind(null, 'brands')}>Add Brand</button>
        </p>
      </div>


    </div>
   )
  }
}

export default ProjectMB;
