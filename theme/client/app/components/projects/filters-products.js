import React, { Component } from 'react';
import Checkbox from '../checkbox';

class FiltersProducts extends Component {
	state = {
		products: [],
	}

	handleChange = (e) => {
		const hasProduct = this.state.products.indexOf(e.target.value) !== -1;

		const products = hasProduct
			? this.state.products.filter(product => product !== e.target.value)
			: [...this.state.products, e.target.value];

		this.setState({ products }, () => {
			this.props.onChange(products);
		});
	}

	sortObj = ( array, order, key ) => {
		array.sort( function (a, b) {
			var A = a[key], B = b[key];
			
			if (order.indexOf(A) > order.indexOf(B)) {
			  return 1;
			} else {
			  return -1;
			}
			
		  });
		  
		  return array;
	}

	render() {
		var { productsOptions } = this.props;
		console.log(productsOptions);
		productsOptions = this.sortObj(productsOptions, [19, 14, 18, 16, 17], 'term_id');
		console.log('after',productsOptions);
		return (
			<section>
				{Object.keys(productsOptions).map(key => (
					<Checkbox
						onChange={this.handleChange}
						value={productsOptions[key].term_id}
						placeholder={productsOptions[key].name}
					/>
				))}
				<style jsx>{`
					section {
						display: flex;
						flex-direction: column;
						align-self: center;
					}
				`}
				</style>
			</section>
		);
	}
}

export default FiltersProducts;
