import React, { Component } from 'react';
import Checkbox from '../checkbox';

class FilterFeatures extends Component {
	state = {
		selected: [],
	}

	componentDidMount() {
		this.setSelected();
	}

	setSelected = () => {
		if (Object.keys(this.props.feature).length) {
			this.setState({ selected: [`${this.props.feature.term_id}`] });
		}
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
		const { features } = this.props;
		const { selected } = this.state;

		return (
			<section>
				{features.map(item => (
					<Checkbox
						key={item.term_id}
						value={item.term_id}
						onChange={this.handleChange}
						checked={selected.indexOf(`${item.term_id}`) !== -1}
					>
						<img src={`${window.templateUri}/public/img/${item.name.toLowerCase().replace(' ', '_')}.svg`} alt="" /> {item.name}
					</Checkbox>
				))}

				<style jsx>{`
				.filter-type {
					margin-bottom: 20px;
				}

				img {
					padding: 0 5px;
				}

				`}
				</style>
			</section>
		);
	}
}


export default FilterFeatures;
