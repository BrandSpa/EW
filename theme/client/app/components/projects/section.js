import React, { Component } from 'react';
import { createApolloFetch } from 'apollo-fetch';
import { findIndex, throttle } from 'lodash';
import classnames from 'classnames';
import Project from './item';
import Filters from './filters';
import FiltersProducts from './filters-products';
import Loading from '../loading';
import qs from 'qs';

const uri = '/wp-content/themes/theme/graphql/index.php';
const apolloFetch = createApolloFetch({ uri });

const projectsQuery = `
query($metaQuery: [metaQuery], $taxQuery: [taxonomyQuery], $paged: Int){
  projects(posts_per_page: 3, paged: $paged, meta_query: $metaQuery, tax_query: $taxQuery) {
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

class ProjectsSection extends Component {
  state = {
  	projects: [],
  	metaQuery: [],
  	taxQuery: [],
  	showFilters: false,
  	inBound: false,
  	inTop: false,
  	inBottom: false,
  	paged: 1,
  }

  componentDidMount = () => {
  	this.getProjects();
  	if (window.matchMedia('(max-width: 1024px)').matches) {
  		window.addEventListener('scroll', throttle(this.stickFilters, 150));
  	}
  }

  componentWillUnmount() {
  	if (window.matchMedia('(max-width: 1024px)').matches) {
  		window.removeEventListener('scroll', throttle(this.stickFilters, 150));
  	}
  }

  getProjects = async (variables = {}) => {
  	try {
  		const res = await apolloFetch({ query: projectsQuery, variables });
  		this.setState({ projects: [...this.state.projects, ...res.data.projects] });
  	} catch (err) {
  		console.log('get projects err: ', err);
  	}
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

	updateOrAdd = (filter, metaQuery) => {
		let q = [];

		if (findIndex(metaQuery, { key: filter.key }) !== -1) {
			q = metaQuery.map((query) => {
				if (query.key !== filter.key) return query;
				return { ...query, ...filter };
			});
		} else {
			q = [...metaQuery, filter];
		}

		return q;
	}

	removeFilter = (key, metaQuery) => {
		const	q = metaQuery.filter(query => query.key !== key);
		return q;
	}

  handleFilters = (filters) => {
  	let { metaQuery } = this.state;

  	if (filters.country.length > 0) {
  		const country = { key: 'country_key', value: filters.country };
  		metaQuery = this.updateOrAdd(country, metaQuery);
  	} else {
  		metaQuery = this.removeFilter('country_key', metaQuery);
  	}

  	if (filters.city.length > 0) {
  		const city = { key: 'city_key', value: filters.city };
  		metaQuery = this.updateOrAdd(city, metaQuery);
  	} else {
  		metaQuery = this.removeFilter('city_key', metaQuery);
  	}

  	if (filters.state.length > 0) {
  		const state = { key: 'state_key', value: filters.state };
  		metaQuery = this.updateOrAdd(state, metaQuery);
  	} else {
  		metaQuery = this.removeFilter('state_key', metaQuery);
  	}

  	this.setState({ projects: [], paged: 1, metaQuery }, () => {
  		this.getProjects({ metaQuery, taxQuery: this.state.taxQuery });
  	});
  }

  handleFiltersProducts = (products) => {
  	let taxQuery = [];

  	if (products.length > 0) {
  		const tax = { taxonomy: 'product', terms: products };
  		taxQuery = [tax];
  	} else {
  		taxQuery = [];
  	}

  	this.setState({ taxQuery }, () => {
  		this.getProjects({ taxQuery, metaQuery: this.state.metaQuery });
  	});
  }

	toggleFilters = (e) => {
		e.preventDefault();
		this.setState({ showFilters: !this.state.showFilters });
	}

	handleUrl = (query) => {
		const { pathname, search } = window.location;
		const oldSearch = qs.parse(search.replace('?', ''));
		const newSearch = { ...oldSearch, ...query };
		const url = `${pathname}?${qs.stringify(newSearch)}`;
		return url;
	}

	paginate = (e) => {
		if (e) e.preventDefault();
		let { taxQuery, metaQuery, paged } = this.state;
		paged += 1;

		this.setState({ paged }, () => {
			this.getProjects({ metaQuery, taxQuery, paged });
  	});
	}

	render() {
		const { projects, showFilters, inBound } = this.state;

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
  		<section ref={ref => this.container = ref}>
  			<div className={filtersStyle} ref={ref => this.filters = ref}>
					<button
						className={filterToggleStyle}
						onClick={this.toggleFilters}
					>Filters <i className="ion-plus" />
					</button>
  			<div className={filterContainerStyle}>
  			<Filters
  				onChange={this.handleFilters}
  				{...this.props}
  			/>
  			<div className="col-lg-3">
  				<h5 className="filters-title">Products</h5>
  				<FiltersProducts
  					onChange={this.handleFiltersProducts}
  					productsOptions={this.props.productsOptions}
  				/>
     </div>
					</div>
  			</div>
  			<div className="col-lg-9">
  				{/* <Loading /> */}
  				<div className="projects">
  					{projects.map(project => (
  						<div key={project.id} className="col-lg-4 col-md-6 project-item">
  							<Project project={project} />
  						</div>
  					))}
      </div>
					<a href="#" onClick={this.paginate} className="pagination-btn">See more</a>
  			</div>

  			<style jsx>{`
          .projects {
            padding: 40px;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
					}

					.pagination-btn {
						float: right;
						margin: 0 40px 20px 0;
					}

          .project-item {
            padding: 5px;
					}

					.filters-title {
						font-size: 15px;
						color: #039ED8;
					}

					.filters {
						width: 100%;
						background: #fff;
						box-shadow: 0 10px 10px rgba(0,0,0,.1);
						display: flex;
						flex-direction: column;
						padding-top: 20px;
						transition: .3s ease;
					}

					.filters--in-bound {
						position: fixed;
						left: 0;
						right: 0;
						top: 80px;
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
					}

					.filters-container--open {
						display: block;
						padding-bottom: 20px;
					}

					@media (min-width: 1024px) {
						.projects {
              flex-direction: row;
						}

						.filters {
							display: initial;
							box-shadow: none;
							background: transparent;
						}

						.filters-container {
							display: block;
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

export default ProjectsSection;
