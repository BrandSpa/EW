import React, { Component } from 'react';
import { createApolloFetch } from 'apollo-fetch';
import { findIndex, groupBy } from 'lodash';
import Product from './item';
import Loading from '../loading';
import FilterTypes from './filterTypes';

const uri = '/wp-content/themes/theme/graphql/index.php';
const apolloFetch = createApolloFetch({ uri });

const productsQuery = `
query($metaQuery: [metaQuery], $taxQuery: [taxonomyQuery]){
  products(post_type: "product", posts_per_page: 9, meta_query: $metaQuery, tax_query: $taxQuery) {
		id
    thumb
		name
		url
		type
		subtype
  }
}
`;

class ProductsSection extends Component {
	state = {
		products: [],
		metaQuery: [],
  	taxQuery: [],
	}

	componentDidMount() {
		this.getProducts();
	}

	getProducts = async (variables = {}) => {
  	try {
			const res = await apolloFetch({ query: productsQuery, variables });

  		this.setState({
  			products: res.data.products,
  		});
  	} catch (err) {
  		console.log('get projects err: ', err);
  	}
	}

	handleTypesFilters = (types) => {
  	let { taxQuery, metaQuery } = this.state;

  	if (types.length > 0) {
  		const tax = { taxonomy: 'type', terms: types };
  		taxQuery = [tax];
		} else {
			taxQuery = [];
		}

		console.log(taxQuery);
  	this.setState({ taxQuery }, () => {
  		this.getProducts({ taxQuery, metaQuery });
  	});
	}

	render() {
		const { products } = this.state;
		return (
			<section>
				<div className="col-sm-3">
					<FilterTypes
					 typesOptions={this.props.typesOptions}
					 onChange={this.handleTypesFilters}
					/>
				</div>
				<div className="col-sm-9">
					{products.map(product => (
						<div className="col-sm-4">
							<Product {...product} />
						</div>
					))}
				</div>
			</section>
		);
	}
}

export default ProductsSection;
