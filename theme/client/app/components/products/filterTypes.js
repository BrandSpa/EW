import React, { Component } from 'react';
import { findIndex, groupBy, sortBy } from 'lodash';
import FilterType from './filterType';

class FilterTypes extends Component {
	state = {
		types: [],
		selected: [],
		type: null
	}

	componentWillMount() {
		this.setFilters();
	}

	componentDidMount() {
		this.setSelected();
	}

	setSelected = () => {
		let typesByPos = sortBy(this.state.types, ['position']);
		let selected = [`${this.props.type.term_id}`];
		console.log('typesPos', typesByPos);
		typesByPos.map(type => {
			if(type.term_id == this.props.type.term_id){
				type.subtypes.map( subtype => {
					selected.push( `${subtype.term_id}` ); 
				})
			}
		});
		if (Object.keys(this.props.type).length) {
			this.setState({ selected });
		}
	}

	sortObj = ( array, order, key ) => {
		array.sort( function (a, b) {
			var A = a[key], B = b[key];
			
			if (order.indexOf(A) > order.indexOf(B)) {
			  return 1;
			} else {
			  return -1;
			}
			
		  });
		  
		  return array;
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
		var typesByPosition = sortBy(types, ['position']);
		typesByPosition = this.sortObj(typesByPosition, [207,41, 51, 207,82, 50, 36, 53, 66], "term_id");
		console.log(types, selected, typesByPosition);
		console.log('props', this.props);
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
