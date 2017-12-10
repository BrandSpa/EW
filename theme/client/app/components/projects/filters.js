import React, { Component } from 'react';

class ProjectsFilters extends Component {
  state = {
  	country: '',
  	city: '',
  	state: '',
  	products: '',
  }

  handleMetaChange = (e) => {
  	const state = { ...this.state, [e.target.name]: e.target.value };
  	this.setState(state, () => {
  		this.props.onChange(state);
  	});
  }

  render() {
  	const {
  		country,
  		state,
  		city,
  	} = this.state;

  	const { countries, cities, states } = this.props;

  	return (
  		<section className="filters">
  			<form className="form-inline">
  				<select
  					className="form-control"
  					name="country"
  					onChange={this.handleMetaChange}
  					value={country}
  				>
  					<option value="">Country</option>
  					{countries.map(country =>
  						<option key={country} value={country}>{country}</option>)}
  				</select>

  				<select
  					className="form-control"
  					name="city"
  					onChange={this.handleMetaChange}
  					value={city}
  				>
  					<option value="">City</option>
  					{cities.map(city =>
  						<option key={city} value={city}>{city}</option>)}
  				</select>

  				<select
  					className="form-control"
  					name="state"
  					onChange={this.handleMetaChange}
  					value={state}
  				>
  					<option value="">State</option>
  					{states.map(state => (
  						<option key={state} value={state}>{state}</option>
  					))}

  				</select>

  			</form>
  			<style jsx>{`
          .filters {
            margin-bottom: 40px;
          }

          select {
            border: none;
            box-shadow: none;
            outline: none;
            -webkit-appearance: none;
            appearance: none;
            background: transparent;
          }

          select:focus {
            box-shadow: none;
            outline: none;
          }
        `}
  			</style>
  		</section>
  	);
  }
}

export default ProjectsFilters;
