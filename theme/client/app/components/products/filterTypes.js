import React, { Component } from 'react';
import { findIndex, groupBy } from 'lodash';
import SelectArrow from '../selectArrow';
import Checkbox from '../checkbox';

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
			this.props.onChange(newSelected);
		});
	}

	render() {
		const { types, selected } = this.state;

		return (
			<section>
				{types.map(type => (
					<section className="filter-type">
						<button className="select-type">
							{type.name} {type.subtypes.length > 0 && <span><SelectArrow /></span>}
						</button>
						<div className="subtypes subtypes-open">
							{type.subtypes.map(subtype => (
								<Checkbox
									key={subtype.term_id}
									value={subtype.term_id}
									placeholder={subtype.name}
									onChange={e => this.handleChange(e, type)}
									checked={selected.indexOf(`${subtype.term_id}`) !== -1}
								/>
							))}
						</div>
					</section>
				))}

				<style jsx>{`
				button {
					padding: 0;
				}
				.filter-type {
					margin-bottom: 20px;
				}
					.select-type {
						background: transparent;
						border: none;
						display: flex;
						align-items:center;
						color: #039ED8;
					}

					.select-type span {
						display: flex;
						padding-left: 5px;
					}

					.subtypes-open {
						display: flex;
						flex-direction: column;
						margin-left: 20px;
					}
				`}
				</style>
			</section>
		);
	}
}


export default FilterTypes;
