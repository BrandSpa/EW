import React, { Component } from 'react';

const Fields = ({
	type, handleField, removeField, addField, data,
}) => (
	<section>
		<div className="form-group">
			{data.length > 0 && data.map((item, i) => (
				<section key={i} className="field" >
					<input
						type="text"
						name={`${type}[]`}
						onChange={e => handleField(type, i, e)}
						value={item}
					/>
					<button
						className="button btn-remove"
						onClick={e => removeField(type, i, e)}
					>Remove
					</button>
				</section>
			))}
		</div>
		<button
			className="button"
			onClick={e => addField(type, e)}
		>Add {type}
		</button>

		<style jsx>{`
        input, select {
          display: block;
          width: 100%;
          height: 35px;
          margin-bottom: 15px;
        }

        .field {
          margin-bottom: 30px;
          float: left;
          width: 100%;
        }

        .btn-remove {
          float: right;
        }
      `}
		</style>
	</section>
);

export default Fields;
