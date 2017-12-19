import React from 'react';

const Checkbox = ({
	value, placeholder, children, onChange = () => {},
}) => (
	<div className="checkbox">
		<label>
			<input
				type="checkbox"
				onChange={onChange}
				value={value}
			/> <span />{children || placeholder}
		</label>
		<style jsx>{`
		input[type="checkbox"] {
			display:none;
		}

		span {
			display: inline-block;
			width: 10px;
			height: 10px;
			border: 1px solid #039ED8;
			margin-right: 5px;
			transition: .3s ease;
		}

		input[type="checkbox"]:checked + span {
			background: #039ED8;
		}

		.checkbox label {
			padding: 0;
		}

		`}
		</style>
	</div>
);

export default Checkbox;
