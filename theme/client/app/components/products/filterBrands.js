import React, { Component } from 'react';
import Checkbox from '../checkbox';

class FilterBands extends Component {
	state = {
		selected: [],
	}

	componentDidMount() {
		if (Object.keys(this.props.brand).length) {
			this.setState({ selected: [`${this.props.brand.term_id}`] });
		}
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
		const { brands, brand } = this.props;
		const { selected } = this.state;

		return (
			<section>
				{brands.map(brnd => (
					<Checkbox
						key={brnd.term_id}
						value={brnd.term_id}
						placeholder={brnd.name}
						onChange={this.handleChange}
						checked={selected.indexOf(`${brnd.term_id}`) !== -1}
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
