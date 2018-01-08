import React, { Component } from 'react';
import SelectArrow from '../selectArrow';

class ProjectsFilters extends Component {
  state = {
  	country: '',
  	city: '',
  	state: '',
  	products: '',
  	states: [],
  	cities: [],
  }

  handleChange = (name, value) => {
  	const state = { ...this.state, [name]: value };
  	this.setState(state, () => {
  		this.props.onChange(state);
  	});
  }

	handleCountry = (e) => {
		const states = this.props.countries[e.target.value] || [];
		const { name, value } = e.target;

		this.setState({ states }, () => {
			this.handleChange(name, value);
		});
	}

	handleState = (e) => {
		const cities = this.props.states[e.target.value] || [];
		const { name, value } = e.target;

		this.setState({ cities }, () => {
			this.handleChange(name, value);
		});
	}

	handleCity = (e) => {
		const { name, value } = e.target;
		this.handleChange(name, value);
	}

	render() {
  	const {
  		country,
  		state,
			city,
			cities,
			states,
  	} = this.state;

  	const { countries, texts } = this.props;

  	return (
  		<section className="filters">
  				<div className="select-container">
  					<select
  						className="form-control"
  						name="country"
  						onChange={this.handleCountry}
  						value={country}
  					>
  						<option value="">{texts.country}</option>
  						{Object.keys(countries).map(country =>
  							<option key={country} value={country}>{country}</option>)}
  					</select>
  					<SelectArrow style={{ position: 'absolute', right: 0 }} />
				</div>
				{states.length > 0 &&
					<div className="select-container">
						<select
							className="form-control"
							name="state"
							onChange={this.handleState}
							value={state}
						>
							<option value="">{texts.state}</option>
							{states.map(state => (
								<option key={state} value={state}>{state}</option>
							))}
						</select>
						<SelectArrow style={{ position: 'absolute', right: 0 }} />
					</div>
				}
				{cities.length > 0 &&
  				<div className="select-container">
  					<select
  						className="form-control"
  						name="city"
  						onChange={this.handleCity}
  						value={city}
  					>
  						<option value="">{texts.city}</option>
  						{cities.map(city =>
  							<option key={city} value={city}>{city}</option>)}
  					</select>
  				<SelectArrow style={{ position: 'absolute', right: 0 }} />
  				</div>
				}

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
