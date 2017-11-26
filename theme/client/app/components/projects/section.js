import React, { Component } from 'react';
import qs from 'qs';
import request from 'axios';
import Project from './item';
import Filters from './filters';
import { createApolloFetch } from 'apollo-fetch';
const uri = '/wp-content/themes/theme/graphql/index.php';
const apolloFetch = createApolloFetch({ uri });

const projectsQuery = `
query($metaQuery: [metaQuery]){
  projects(posts_per_page: 2, meta_query: $metaQuery) {
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

    apolloFetch({projectsQuery, variables})
  }

  handleFilters = (filters) => {
    console.log(filters);
  }

  render() {
    const { projects } = this.state;

    return (
      <div className="projects row">

        <Filters
          onChange={this.handleFilters}
          {...this.props}
        />

        {projects.map(project =>
          <div className="col-lg-4 project-item">
            <Project key={project.ID} project={project} />
          </div>
        )}

        <style jsx>{`
          .projects {
            padding: 40px;
              background: #F7FAFF;
          }
          .project-item {
            padding: 5px;
          }
        `}</style>
      </div>
   )
  }
}

export default ProjectsSection;
