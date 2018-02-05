import React, { Component } from 'react';
import { createApolloFetch } from 'apollo-fetch';
import { findIndex, throttle } from 'lodash';
import classnames from 'classnames';
import New from './item';
import Points from '../points';

const uri = '/wp-content/themes/theme/graphql/index.php';
const apolloFetch = createApolloFetch({ uri });

const newsQuery = `
query($metaQuery: [metaQuery], $taxQuery: [taxonomyQuery], $paged: Int){
  news(posts_per_page: 12, paged: $paged, meta_query: $metaQuery, tax_query: $taxQuery) {
    id
    thumb
    name
    url
	year
    month
    readMore
  }
}
`;

class NewsSection extends Component {
  state = {
  	news: [],
  	metaQuery: [],
  	taxQuery: [],
  	showFilters: false,
  	inBound: false,
  	inTop: false,
  	inBottom: false,
  	paged: 1,
  }

  componentDidMount = () => {
  	this.getNews();
  }

  componentWillUnmount() {
  	
  }

  getNews = async (variables = {}) => {
	var lang = this.getLang();
  	try {
        const res = await apolloFetch({ query: newsQuery, variables, lang });
        this.setState({ news: [...this.state.news, ...res.data.news] });
  	} catch (err) {
  		console.log('get news err: ', err);
  	}
  }

  	getLang = () => {

		var uri = new URL(window.location.href).pathname;
		uri = uri.split( '/' );
		if(uri[0].length == 2){
			return uri[0];
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

  	this.setState({ news: [], paged: 1, metaQuery }, () => {
  		this.getNews({ metaQuery, taxQuery: this.state.taxQuery });
  	});
  }

  handleFiltersProducts = (products) => {
  	let taxQuery = [];

  	if (products.length > 0) {
  		const tax = { taxonomy: 'news', terms: news };
  		taxQuery = [tax];
  	} else {
  		taxQuery = [];
  	}

  	this.setState({ news: [], taxQuery }, () => {
  		this.getNews({ taxQuery, metaQuery: this.state.metaQuery });
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
			this.getNews({ metaQuery, taxQuery, paged });
  	});
	}

	render() {
		const { news, showFilters, inBound } = this.state;
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
  		<section ref={ref => this.container = ref}>
  			<div className="col-lg-12">
                {/* <Loading /> */}
                <div className="projects">
                    {news.length > 0 ? news.map(item => (
                        <div key={item.id} className="col-lg-4 col-md-6 project-item">
                            <New item={item} />
                        </div>
                        ))
                            :
                            <div className="empty-value">
                                <h4>{texts.emptyResult}</h4>
                            </div>
                        }
            </div>
                {news.length > 0 &&
                    <a href="#" onClick={this.paginate} className="pagination-btn">
                        <span>{texts.seeMore}</span>
                        <Points style={{ float: 'right' }} />
                    </a>
                }
            </div>

				<style jsx>{`
          .projects {
						padding: 0;
						margin: 20px 0;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
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


          .project-item {
						padding: 5px;
					}

					.empty-value {
						height: 100px;
						display: flex;
						flex: 1;
						align-items: center;
					}

					.empty-value h4 {
						font-size: 17px;
						color: #039ED8;
					}

					.filters-title {
						font-size: 15px;
						color: #039ED8;
					}

					.filters {
						width: 90%;
						background: #fff;
						box-shadow: 0 10px 10px rgba(0,0,0,.1);
						display: flex;
						flex-direction: column;
						padding-top: 20px;
						margin-left: 15px;
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
							padding: 0;
							margin: 0;
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

export default NewsSection;
