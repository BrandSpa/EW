import React, { Component } from 'react';

const Constructor = ({
	handleField, removeField, addField, constructor,
}) => (
	<section>
		<div className="form-group">
			{constructor.length > 0 && constructor.map((constructorItem, i) => (
				<section className="field" key={i}>
					<input
						type="text"
						name="constructor[]"
						onChange={e => handleField('constructor', i, e)}
						value={constructorItem}
					/>
					<button
						className="button btn-remove"
						onClick={e => removeField('constructor', i, e)}
					>Remove Constructor
					</button>
				</section>
			))}
		</div>
		<button
			className="button"
			onClick={e => addField('constructor', e)}
		>Add Constructor
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

export default Constructor;
