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

	render() {
		const { productsOptions } = this.props;
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
