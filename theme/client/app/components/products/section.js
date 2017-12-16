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
  posts(post_type: "product", posts_per_page: 9, meta_query: $metaQuery, tax_query: $taxQuery) {
		id
    thumb
		name
		url
    country
    state
    city
  }
}
`;

class ProductsSection extends Component {
	state = {
		products: [],
	}

	componentDidMount() {
		this.getProducts();
	}

	getProducts = async (variables = {}) => {
  	try {
			const res = await apolloFetch({ query: productsQuery, variables });
			console.log(res.data.posts);
  		this.setState({
  			products: res.data.posts,
  		});
  	} catch (err) {
  		console.log('get projects err: ', err);
  	}
	}

	render() {
		const { products } = this.state;
		return (
			<section>
				<FilterTypes typesOptions={this.props.typesOptions} />
				{products.map(product => (
					<Product {...product} />
				))}
			</section>
		);
	}
}

export default ProductsSection;
