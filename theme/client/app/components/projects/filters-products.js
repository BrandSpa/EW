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
				{productsOptions.map(product => 
					<div className="checkbox">
						<label>
							<input 
								type="checkbox" 
								onChange={this.handleChange} 
								value={product} /> {product}
						</label>
					</div>
				)}
			</section>
		)
	}
}

export default FiltersProducts;
