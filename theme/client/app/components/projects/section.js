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
query($metaQuery: [metaQuery]){
  projects(posts_per_page: 9, meta_query: $metaQuery) {
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
    metaQuery: []
  }

  componentDidMount = () => {
    this.getProjects();
  }

  getProjects = (metaQuery = [], search = null) => {
    const variables = {
      metaQuery
    };

    apolloFetch({query: projectsQuery, variables})
      .then(res => this.setState({ projects: res.data.projects }));
  }

  handleFilters = (filters) => {

    let metaQuery = this.state.metaQuery;

    if(filters.country.length > 0) {
      const country = {key: 'country_key', value: filters.country, compare: 'IN'};
      metaQuery = [...metaQuery, country];
    }

    if(filters.city.length > 0) {
      const country = {key: 'city_key', value: filters.city, compare: 'IN'};
      metaQuery = [...metaQuery, country];
    }

    this.getProjects(metaQuery);
  }

  handleFiltersProducts = (products) => {
    let metaQuery = this.state.metaQuery;

    if(products.length > 0) {
      const country = {key: 'products_key', value: products, compare: 'LIKE'};
      metaQuery = [...metaQuery, country];
    }

    console.log(metaQuery);
    
    this.getProjects(metaQuery);
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
