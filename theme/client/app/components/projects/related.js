import React, { Component } from 'react';
import { createApolloFetch } from 'apollo-fetch';
import Project from './item';

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
		year
		month
  }
}
`;

class ProjectsRelated extends Component {
	state = {
		projects: [],
		taxQuery: [],
	}

	componentDidMount() {
		this.handleFiltersProducts(this.props.products);
	}

	getProjects = async (variables = {}) => {
  	try {
  		const res = await apolloFetch({ query: projectsQuery, variables });
  		this.setState({ projects: res.data.projects });
  	} catch (err) {
  		console.log('get projects err: ', err);
  	}
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
			<section >
				<h4>Related projects</h4>
				<div className="projects">

  					{projects.map(project => (
  						<div key={project.id} className="col-lg-4 col-md-6 project-item">
  							<Project project={project} />
  						</div>
					))}
				</div>

				<style jsx>{`
				.projects {
					display: flex;
					flex-wrap: wrap;
					flex-direction: column;
					margin: 90px 0;
				}

				section h4 {
					font-size: 24px;
					color: #039ED8;
					line-height: 37px;
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


export default ProjectsRelated;
