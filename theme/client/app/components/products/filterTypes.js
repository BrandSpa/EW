import React, { Component } from 'react';
import { findIndex, groupBy, sortBy } from 'lodash';
import FilterType from './filterType';

class FilterTypes extends Component {
	state = {
		types: [],
		selected: [],
	}

	componentWillMount() {
		this.setFilters();
	}

	componentDidMount() {
		this.setSelected();
	}

	setSelected = () => {
		if (Object.keys(this.props.type).length) {
			this.setState({ selected: [`${this.props.type.term_id}`] });
		}
	}

	setFilters = () => {
		const childTypes = groupBy(this.props.typesOptions, 'parent');
		const types = childTypes[0].map((type) => {
			const subtypes = childTypes[type.term_id] ? childTypes[type.term_id] : [];
			return { ...type, subtypes };
		});

		this.setState({ types });
	}

	handleChange = (e) => {
		const { selected } = this.state;
		const hasType = selected.indexOf(e.target.value) !== -1;

		const newSelected = hasType
			? selected.filter(type => type !== e.target.value)
			: [...selected, e.target.value];

		this.setState({ selected: newSelected }, () => {
			this.props.onChange(newSelected, true);
		});
	}

	render() {
		const { types, selected } = this.state;
		const typesByPosition = sortBy(types, ['position']);
		console.log(types, typesByPosition);

		return (
			<section>
				{typesByPosition.map(type => (
					<FilterType
						type={type}
						selected={selected}
						onChange={this.handleChange}
					/>
				))}


			</section>
		);
	}
}


export default FilterTypes;
