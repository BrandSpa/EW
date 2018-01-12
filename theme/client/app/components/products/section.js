import React, { Component } from 'react';
import { createApolloFetch } from 'apollo-fetch';
import { findIndex, groupBy } from 'lodash';
import Product from './item';
import Points from '../points';
import FilterTypes from './filterTypes';
import FilterFeatures from './filterFeatures';
import FilterBrands from './filterBrands';

const uri = '/wp-content/themes/theme/graphql/index.php';
const apolloFetch = createApolloFetch({ uri });

const productsQuery = `
query($metaQuery: [metaQuery], $taxQuery: [taxonomyQuery], $paged: Int){
  products(post_type: "product", paged: $paged, posts_per_page: 12, meta_query: $metaQuery, tax_query: $taxQuery) {
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
		paged: 1,
	}

	componentDidMount() {
		this.prefilter();
	}

	getProducts = async (variables = {}) => {
  	try {
			const res = await apolloFetch({ query: productsQuery, variables });

  		this.setState({
  			products: [...this.state.products, ...res.data.products],
  		});
  	} catch (err) {
  		console.log('get projects err: ', err);
  	}
	}

	prefilter = async () => {
		if (this.props.type && Object.keys(this.props.type).length) {
			await this.handleTypesFilters([`${this.props.type.term_id}`]);
		}

		if (this.props.feature && Object.keys(this.props.feature).length) {
			await this.handleFeaturesFilters([`${this.props.feature.term_id}`]);
		}

		if (this.props.brand && Object.keys(this.props.brand).length) {
			await this.handleBrandsFilters([`${this.props.brand.term_id}`]);
		}

		const { taxQuery, metaQuery } = this.state;

		this.getProducts({ taxQuery, metaQuery });
	}

	addOrUpdate = (arr, key, obj) => {
		let q = [];

		if (findIndex(arr, { [key]: obj[key] }) !== -1) {
			q = arr.map((item) => {
				if (item[key] !== obj[key]) return item;
				return { ...item, ...obj };
			});
		} else {
			q = [...arr, obj];
		}

		return q;
	}

	handleTypesFilters = (types, fetch = false) => {
  	let { taxQuery, metaQuery } = this.state;

  	if (types.length > 0) {
			const tax = { taxonomy: 'type', terms: types };
  		taxQuery = this.addOrUpdate(taxQuery, 'taxonomy', tax);
		} else {
			taxQuery = taxQuery.filter(tax => tax.taxonomy !== 'type');
		}

		const p = new Promise((resolve) => {
			this.setState({ taxQuery, products: [], paged: 1 }, () => {
				if (fetch) this.getProducts({ taxQuery, metaQuery });
				return resolve();
			});
		});

		return p;
	}

	handleFeaturesFilters = (features, fetch = false) => {
		let { taxQuery, metaQuery } = this.state;

  	if (features.length > 0) {
  		const tax = { taxonomy: 'feature', terms: features };
  		taxQuery = this.addOrUpdate(taxQuery, 'taxonomy', tax);
		} else {
			taxQuery = taxQuery.filter(tax => tax.taxonomy !== 'feature');
		}

  	const p = new Promise((resolve) => {
			this.setState({ taxQuery, products: [], paged: 1 }, () => {
				if (fetch) this.getProducts({ taxQuery, metaQuery });
				return resolve();
			});
		});

		return p;
	}

	handleBrandsFilters = (brands, fetch = false) => {
		let { taxQuery, metaQuery } = this.state;

  	if (brands.length > 0) {
  		const tax = { taxonomy: 'brand', terms: brands };
			taxQuery = this.addOrUpdate(taxQuery, 'taxonomy', tax);
		} else {
			taxQuery = taxQuery.filter(tax => tax.taxonomy !== 'brand');
		}

  	const p = new Promise((resolve) => {
			this.setState({ taxQuery, products: [], paged: 1 }, () => {
				if (fetch) this.getProducts({ taxQuery, metaQuery });
				return resolve();
			});
		});

		return p;
	}

	paginate = (e) => {
		if (e) e.preventDefault();
		let { taxQuery, metaQuery, paged } = this.state;
		paged += 1;

		this.setState({ paged }, () => {
			this.getProducts({ metaQuery, taxQuery, paged });
  	});
	}

	render() {
		const { products } = this.state;
		const { texts } = this.props;

		return (
			<section>
				<div className="col-sm-3">
					<FilterTypes
					 typesOptions={this.props.typesOptions}
					 type={this.props.type}
					 onChange={this.handleTypesFilters}
					/>
					<h4>{texts.features}</h4>
					<FilterFeatures
						features={this.props.featuresOptions}
						feature={this.props.feature}
						onChange={this.handleFeaturesFilters}
					/>
					<h4>{texts.brands}</h4>
					<FilterBrands
						brands={this.props.brandsOptions}
						brand={this.props.brand}
						onChange={this.handleBrandsFilters}
					/>
				</div>
				<div className="col-sm-9">
					<div className="products">
						{products.length > 0 ? products.map(product => (
							<div className="col-sm-4">
								<Product {...product} />
							</div>
						))
							:
							<div className="empty-value">
								<h4>{texts.emptyResult}</h4>
							</div>
						}
					</div>
					{products.length > 0 &&
						<a href="#" onClick={this.paginate} className="pagination-btn">
							<span>{texts.seeMore}</span>
							<Points style={{ float: 'right' }} />
						</a>
					}
				</div>
				<style jsx>{`

				.products {
					padding: 40px;
					display: flex;
					flex-wrap: wrap;
					flex-direction: column;
				}
					.empty-value {
						height: 200px;
						display: flex;
						flex: 1;
						align-items: center;
					}

					.empty-value h4 {
						font-size: 17px;
						color: #039ED8;
					}

					h4 {
						font-size: 15px;
						color: #039ED8;
					}

					.pagination-btn {
						float: right;
						margin: 0 40px 20px 0;
						color: #039ED8;
						font-size: 20px;
					}

					.pagination-btn span {
						display: block;
					}
				`}
				</style>
			</section>
		);
	}
}

export default ProductsSection;
