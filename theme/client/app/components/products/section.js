import React, { Component } from 'react';
import { createApolloFetch } from 'apollo-fetch';
import { findIndex, groupBy } from 'lodash';
import Product from './item';
import Points from '../points';
import FilterTypes from './filterTypes';
import FilterFeatures from './filterFeatures';
import FilterBrands from './filterBrands';
import classnames from 'classnames';
import {throttle} from 'lodash';
const uri = '/wp-content/themes/theme/graphql/index.php?lang=es';
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
		empty: false,
		inBound: false,
  	inTop: false,
  	inBottom: false,
		showFilters: false
	}

	componentDidMount() {
		this.prefilter();
		if (window.matchMedia('(max-width: 1024px)').matches) {
  		window.addEventListener('scroll', throttle(this.stickFilters, 150));
  	}
	}

	getLang = () => {

		var uri = new URL(window.location.href).pathname;
		uri = uri.split( '/' );
		console.log(uri);
		if(uri[1].length == 2){
			return uri[1];
		}
		return 'en';
	}

	stickFilters = () => {
		const { container, filters } = this;
		const bound = container.getBoundingClientRect();
		const containerHeight = container.clientHeight;
		const h = filters.clientHeight;

		if (bound.top < 0, bound.bottom > 0) {
			this.setState({ inBound: true });
		}

		if (!(bound.top < 0 && (bound.bottom - h) - 40 > 0) && bound.y < 0) {
			this.setState({ inBound: false });
		}

		if (!(bound.top < 0 && (bound.bottom - h) - 40 > 0) && bound.y > 0) {
			this.setState({ inBound: false });
		}
	}

	getProducts = async (variables = {}) => {
		var lang = this.getLang();
		try {
				const res = await apolloFetch({ query: productsQuery, variables, lang });

			this.setState({
					products: [...this.state.products, ...res.data.products],
					empty: !(res.data.products.length > 0),
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

	toggleFilters = (e) => {
		this.setState({ showFilters: !this.state.showFilters });
	}

	render() {
		const { products, empty, showFilters, inBound } = this.state;
		const { texts } = this.props;

		const filtersStyle = classnames('filters', {
			'filters--in-bound': inBound,
		});

  	const filterContainerStyle = classnames('filters-container', {
  		'filters-container--open': showFilters,
		});

		const filterToggleStyle = classnames('filters__toggle', {
			'filters__toggle--open': showFilters,
		});

		return (
			<section  ref={ref => this.container = ref}>
				<div className={filtersStyle} ref={ref => this.filters = ref}>
				<button
					className={filterToggleStyle}
					onClick={this.toggleFilters}
				>{texts.filters} <i className="ion-plus" />
				</button>
				<div className={filterContainerStyle}>
				<div className="col-md-3">
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
				</div>
				</div>
				<div className="col-sm-9">
					<div className="products">
						{products.length > 0 ? products.map(product => (
							<div className="col-md-4 product-item" >
								<Product {...product} />
							</div>
						))
							:
							<div className="empty-value">
								<h4>{texts.emptyResult}</h4>
							</div>
						}
					</div>
					{products.length > 0 && !empty &&
						<a href="#" onClick={this.paginate} className="pagination-btn">
							<span>{texts.seeMore}</span>
							<Points style={{ float: 'right' }} />
						</a>
					}
				</div>
				<style jsx>{`

					.products {
						padding: 0px;
					}

					.filters {
						width: 90%;
						background: #fff;
						box-shadow: 0 10px 10px rgba(0,0,0,.1);
						display: flex;
						flex-direction: column;
						padding-top: 20px;
						margin-left: 20px;
						margin-bottom: 20px;
						transition: .3s ease;
					}

					.filters--in-bound {
						position: fixed;
						left: 0;
						right: 0;
						top: 60px;
						z-index: 100;
					}

					.filters__toggle {
						display: flex;
						align-self: flex-end;
						cursor: pointer;
						border: none;
						background: transparent;
						font-size: 15px;
						color: #039ED8;
						margin-bottom: 20px;
						align-items: center;
						outline: none;
					}

					.filters__toggle i {
						padding: 0 20px;
					}

					.filters__toggle--open i::before {
						transform: rotate(45deg);
					}

					.filters-container {
						display: none;
						overflow: scroll;
						height: 50vh;
					}

					.filters-container--open {
						display: block;
						padding-bottom: 20px;
					}

					.product-item {
						padding: 5px;
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

					@media (min-width: 1024px) {
						.products {
							padding: 0;
							display: flex;
							flex-wrap: wrap;
							}

							.filters {
								display: initial;
								box-shadow: none;
								background: transparent;
								margin: 0;
								padding: 0;
							}

							.filters-container {
								display: block;
								height: auto;
								overflow: initial;
							}

							.filters__toggle {
								display: none;
							}

					}
				`}
				</style>
			</section>
		);
	}
}

export default ProductsSection;
