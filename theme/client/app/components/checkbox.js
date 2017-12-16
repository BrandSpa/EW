import React from 'react';

const Checkbox = ({ value, placeholder, onChange = () => {} }) => (
	<div className="checkbox">
		<label>
			<input
				type="checkbox"
				onChange={onChange}
				value={value}
			/> {placeholder}
		</label>
	</div>
);

export default Checkbox;
