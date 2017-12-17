import React, { Component } from 'react';
import { createApolloFetch } from 'apollo-fetch';
import { findIndex } from 'lodash';
import Project from './item';
import Filters from './filters';
import FiltersProducts from './filters-products';
import Loading from '../loading';

const uri = '/wp-content/themes/theme/graphql/index.php';
const apolloFetch = createApolloFetch({ uri });

const projectsQuery = `
query($metaQuery: [metaQuery], $taxQuery: [taxonomyQuery]){
  projects(posts_per_page: 9, meta_query: $metaQuery, tax_query: $taxQuery) {
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
  }

  componentDidMount = () => {
  	this.getProjects();
  }

  getProjects = async (variables = {}) => {
  	try {
  		const res = await apolloFetch({ query: projectsQuery, variables });
  		console.log(res);
  		this.setState({
  			projects: res.data.projects,
  		});
  	} catch (err) {
  		console.log('get projects err: ', err);
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

  	this.setState({ metaQuery }, () => {
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

  render() {
  	const { projects } = this.state;

  	return (
  		<section>
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
  			<div className="col-lg-9">
  				{/* <Loading /> */}
  				<div className="projects">
  					{projects.map(project => (
  						<div key={project.id} className="col-lg-4 col-md-6 project-item">
  							<Project project={project} />
  						</div>
  					))}
  				</div>
  			</div>

  			<style jsx>{`
          .projects {
            padding: 40px;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
          }

          .project-item {
            padding: 5px;
					}

					.filters-title {
						font-size: 15px;
						color: #039ED8;
					}

          @media (min-width: 1024px) {
            .projects {
              flex-direction: row;
            }

          }
        `}
  			</style>
  		</section>
  	);
  }
}

export default ProjectsSection;
