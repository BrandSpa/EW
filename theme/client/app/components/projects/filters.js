import React, { Component } from 'react';
import SelectArrow from '../selectArrow';

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
  				<div className="select-container">
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
  					<SelectArrow style={{ position: 'absolute', right: 0 }} />
  				</div>
  				<div className="select-container">
  					<select
  						className="form-control"
  						name="city"
  						onChange={this.handleMetaChange}
  						value={city}
  					>
  						<option value="">City </option>
  						{cities.map(city =>
  							<option key={city} value={city}>{city}</option>)}
  					</select>
  				<SelectArrow style={{ position: 'absolute', right: 0 }} />
  				</div>
  				<div className="select-container">
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
  					<SelectArrow style={{ position: 'absolute', right: 0 }} />
  				</div>
  			<style jsx>{`
          .filters {

						display: flex;
					}

					.select-container {
						position: relative;
						display: flex;
						align-items: center;
						width: 100px;
						margin-right: 20px;
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

					@media (min-width: 1024px) {
						.filters {
							margin-bottom: 40px;
						}
					}
        `}
  			</style>
  		</section>
  	);
  }
}

export default ProjectsFilters;
