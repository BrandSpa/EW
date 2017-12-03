import React from 'react';

const Location = (props) => (
<section>
		<div className="form-group">
		<p>
		<select 
			name="country" 
			className="form-control" 
			onChange={(e) => props.handleChange(e)} 
			value={props.country}
		>
			<option value="">Select country</option>
			{props.countries.map(countryOption =>
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
			onChange={props.handleChange} 
			value={props.state}
		>
			<option>Select state</option>
			{props.states.map(stateOption =>
				<option name={stateOption} id="">{stateOption}</option>
			)}
		</select>
		</p>
	</div>
	<div className="form-group">
		<select 
			name="city" 
			className="form-control" 
			onChange={props.handleChange} 
			value={props.city}
		>
			<option value="">Select city</option>
			{props.cities.map(cityOption => 
				<option value={cityOption}>{cityOption}</option>
			)}
		</select>
	</div>
	<style jsx>{`
        input, select {
          display: block;
          width: 100%;
          height: 35px;
          margin-bottom: 15px;
        }
      `}</style>
</section>
);

export default Location;