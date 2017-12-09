import React, { Component } from 'react';

const Constructor = ({ handleField, removeField, addField, architect }) => (
	<section>
		<div className="form-group">
					{architect.length > 0 && architect.map((architectItem, i) => 
						<section className="field" key={i}>
							<input
								type="text" 
								name="architect[]" 
								onChange={(e) => handleField('architect', i, e)} 
								value={architectItem}
							/>
							<button
								className="button btn-remove" 
								onClick={(e) => removeField('architect', i, e)}
							>Remove Arquitect</button>
						</section>
					)}
      	</div>
      <button
				className="button" 
				onClick={(e) => addField('architect', e)}
			>Add Arquitect</button>
			
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
      `}</style>
	</section>
);

export default Constructor;
