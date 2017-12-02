import React, { Component } from 'react';

class FiltersProducts extends Component {
	state = {
		products: []
	}

	handleChange = (e) => {
		let hasProduct = this.state.products.indexOf(e.target.value) !== -1;
		
		const products = hasProduct 
			?  this.state.products.filter(product => product !== e.target.value)
			: [...this.state.products, e.target.value];

		this.props.onChange(products);
		this.setState({ products });
	}

	render() {
		const { productsOptions } = this.props;
		return (
			<section>
				{Object.keys(productsOptions).map((key) =>
					<div className="checkbox">
						<label>
							<input 
								type="checkbox" 
								onChange={this.handleChange} 
								value={productsOptions[key].term_id} /> {productsOptions[key].name}
						</label>
					</div>
				)}
			</section>
		)
	}
}

export default FiltersProducts;
