import React from 'react';

const Location = ({
	handleChange, countries, states, cities, city, country, state,
}) => (

	<section>
		<div className="form-group">
			<p>
				<select
					name="country"
					className="form-control"
					onChange={e => handleChange(e)}
					value={country}
				>
					<option value="">Select country</option>
					{Object.keys(countries).map(countryOption =>
						<option key={countryOption} name={countryOption} id="">{countryOption}</option>)}
				</select>
			</p>
		</div>

		<div className="form-group">
			<p>
				<select
					name="state"
					className="form-control"
					onChange={handleChange}
					value={state}
				>
					<option value="">Select state</option>
					{Object.keys(states).map(stateOption =>
						<option key={stateOption} name={stateOption} id="">{stateOption}</option>)}
				</select>
			</p>
		</div>
		<div className="form-group">
			<select
				name="city"
				className="form-control"
				onChange={handleChange}
				value={city}
			>
				<option value="">Select city</option>
				{cities.map(cityOption =>
					<option key={cityOption} value={cityOption}>{cityOption}</option>)}
			</select>
		</div>
		<style jsx>{`
        input, select {
          display: block;
          width: 100%;
          height: 35px;
          margin-bottom: 15px;
        }
      `}
		</style>
	</section>
);

export default Location;
