import React, { Component } from 'react';
import qs from 'qs';
import request from 'axios';
import Project from './item';
import Filters from './filters';
import FiltersProducts from './filters-products';
import { createApolloFetch } from 'apollo-fetch';
import Loading from '../loading';
const uri = '/wp-content/themes/theme/graphql/index.php';
const apolloFetch = createApolloFetch({ uri });

const projectsQuery = `
query($metaQuery: [metaQuery], $taxQuery: [taxonomyQuery]){
  projects(posts_per_page: 9, meta_query: $metaQuery, tax_query: $taxQuery) {
    thumb
    name
    country
    state
    city
    brands
  }
}
`;

class ProjectsSection extends Component {
  state = {
    projects: [],
    metaQuery: [],
    taxQuery: []
  }

  componentDidMount = () => {
    this.getProjects();
  }

  getProjects = async (variables = {}) => {
    try {
      const res = await apolloFetch({query: projectsQuery, variables});
      this.setState({ 
        projects: res.data.projects
      });
    } catch(err) {
      console.log('get projects err: ', err);
    } 
  }

  handleFilters = (filters) => {

    let metaQuery = this.state.metaQuery;

    if(filters.country.length > 0) {
      const country = {key: 'country_key', value: filters.country};
      metaQuery = [...metaQuery, country];
    }

    if(filters.city.length > 0) {
      const city = {key: 'city_key', value: filters.city};
      metaQuery = [...metaQuery, city];
    }

    this.setState({ 
      metaQuery
    });

    this.getProjects({ metaQuery, taxQuery: this.state.taxQuery });
  }

  handleFiltersProducts = (products) => {
    let taxQuery = [];

    if(products.length > 0) {
      const tax = {taxonomy: 'product', terms: products};
      taxQuery = [tax];
    }

    this.setState({ 
      taxQuery
    });
    this.getProjects({taxQuery, metaQuery: this.state.metaQuery});
  }

  render() {
    const { projects } = this.state;

    return (
      <div className="row">
         <Filters
            onChange={this.handleFilters}
            {...this.props}
          />
        <div className="col-lg-3">
          <FiltersProducts 
            onChange={this.handleFiltersProducts}
            productsOptions={this.props.productsOptions} 
          />
        </div>
        <div className="col-lg-9">
          {/* <Loading /> */}
          <div className="projects">
            {projects.map(project =>
              <div className="col-lg-4 col-md-6 project-item">
                <Project key={project.ID} project={project} />
              </div>
            )}
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

          @media (min-width: 1024px) {
            .projects {
              flex-direction: row;
            }
            
          }
        `}</style>
      </div>
   )
  }
}

export default ProjectsSection;
