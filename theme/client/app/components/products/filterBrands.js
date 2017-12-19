import React, { Component } from 'react';
import Checkbox from '../checkbox';

class FilterBands extends Component {
	state = {
		selected: [],
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
		const { brands } = this.props;

		return (
			<section>
				{brands.map(brand => (
					<Checkbox
						key={brand.term_id}
						value={brand.term_id}
						placeholder={brand.name}
						onChange={this.handleChange}
					/>
				))}

				<style jsx>{`
				.filter-type {
					margin-bottom: 20px;
				}

				`}
				</style>
			</section>
		);
	}
}


export default FilterBands;
