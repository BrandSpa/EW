import React, { Component } from 'react';

class ProjectsFilters extends Component {

  state = {
    meta: {
      country: '',
      city: '',
      products: '',
      brands: '',
    },
    query: ''
  }

  handleMetaChange = (e) => {
    const meta = { ...this.state.meta, [e.target.name]: e.target.value };
    const state = { ...this.state, meta };
    this.setState(state);
    this.props.onChange(state);
  }

  handleSearchChange = (e) => {
    const state = {...this.state, query: e.target.value};
    this.setState(state);
    this.props.onChange(state);
  }

  render() {
    const {
      country,
      city,
      product,
      brand,
      query
    } = this.state;

    return (
      <div className="filters">
        <form className="form-inline">
          <select className="form-control" name="country" onChange={this.handleMetaChange} value={country} >
            <option value="">Country</option>
            <option value="Colombia">Colombia</option>
          </select>

          <select className="form-control" name="city" onChange={this.handleMetaChange} value={city} >
            <option value="">City</option>
            <option value="Bogotá">Bogotá</option>
          </select>

          <select className="form-control" name="products" onChange={this.handleMetaChange} value={product} >
            <option value="">Product</option>
            {this.props.productsOptions.map((productOption, i) =>
              <option key={i} value={productOption}>{productOption}</option>
            )}
          </select>

          <select className="form-control" name="brands" onChange={this.handleMetaChange} value={brand} >
            <option value="">Brand</option>
            {this.props.brandsOptions.map((brandOption, i) =>
              <option key={i} value={brandOption}>{brandOption}</option>
            )}
          </select>

          <input
            type="text"
            name="query"
            placeholder="search"
            className="form-control"
            onChange={this.handleSearchChange}
            value={query}
          />
        </form>
        <style jsx>{`
          .filters {
            margin-bottom: 40px;
          }
        `}</style>
      </div>
   )
  }
}

export default ProjectsFilters;
