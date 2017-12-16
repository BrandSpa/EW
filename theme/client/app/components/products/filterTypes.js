import React, { Component } from 'react';
import { findIndex, groupBy } from 'lodash';
import SelectArrow from '../selectArrow';
import Checkbox from '../checkbox';

class FilterTypes extends Component {
	state = {
		types: [],
	}

	componentDidMount() {
		this.setFilters();
	}

	setFilters = () => {
		const childTypes = groupBy(this.props.typesOptions, 'parent');
		const types = childTypes[0].map((type) => {
			const subtypes = childTypes[type.term_id] ? childTypes[type.term_id] : [];
			return { ...type, subtypes };
		});
		this.setState({ types });
	}

	render() {
		const { types } = this.state;

		return (
			<section>
				{types.map(type => (
					<section>
						<button className="select-type">{type.name} <SelectArrow /></button>
						<div className="subtypes subtypes-open">
							{type.subtypes.map(subtype => (
								<Checkbox value={subtype.name} placeholder={subtype.name} />
							))}

						</div>
					</section>
				))}

				<style jsx>{`
					.select-type {
						background: transparent;
						border: none;
						display: flex;
						align-items:center;
						color: #039ED8;
					}

					.subtypes-open {
						display: flex;
						flex-direction: column;
					}
				`}
				</style>
			</section>
		);
	}
}


export default FilterTypes;
