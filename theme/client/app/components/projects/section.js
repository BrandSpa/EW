import React, { Component } from 'react';
import qs from 'qs';
import request from 'axios';
import Project from './item';
import Filters from './filters';

class ProjectsSection extends Component {
  state = {
    projects: [],
    filters: []
  }

  componentDidMount = () => {
    this.getProjects();
  }

  getProjects = (filters = [], search = null) => {
    const data = { action: 'get_projects', filters, search };

    request
      .post('/wp-admin/admin-ajax.php', qs.stringify(data))
      .then(res => {
        this.setState({ projects: Array.isArray(res.data.projects) ? res.data.projects : [] })
      })
      .catch(err => console.log('get projects', err));
  }

  getMetaQuery = (state, field, compare) => {
    if(state[field].length > 0) {
      return { key: `${field}_key`, value: state[field], compare };
    }

    return null;
  }

  handleFilters = (rawFilters) => {
    let multiple = ['products', 'brands'];

    let metaFilters = Object.keys(rawFilters.meta)
      .map(key => {
        if(multiple.indexOf(key) !== -1) {
          return this.getMetaQuery(rawFilters.meta, key, 'LIKE');
        } else {
          return this.getMetaQuery(rawFilters.meta, key, '=');
        }
      })
      .filter(q => q !== null);

    let searchFilters = rawFilters.query;
    this.getProjects(metaFilters, searchFilters);
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
