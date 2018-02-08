import React, { Component } from 'react';
import Checkbox from '../checkbox';
import SelectArrow from '../selectArrow';

class FilterType extends Component {
	state = {
		open: false,
	}

	toggle = (e) => {
		e.preventDefault();
		this.setState({ open: !this.state.open });
	}

	someSelected = () => {
		const { type, selected } = this.props;
		const hasSelected = type.subtypes.filter(t => selected.indexOf(`${t.term_id}`) !== -1);
		if (hasSelected.length > 0) {
			this.setState({ open: true });
		}
	}

	componentWillReceiveProps() {
		this.someSelected();
	}

	render() {
		const { type, selected } = this.props;
		const { open } = this.state;

		return (
			<section className="filter-type">
				<button className="select-type" onClick={this.toggle}>
					{type.name} {type.subtypes.length > 0 && <span><SelectArrow /></span>}
				</button>
				<div className={open ? 'subtypes subtypes-open' : 'subtypes'}>
					{type.subtypes.map(subtype => (
						<Checkbox
							key={subtype.term_id}
							value={subtype.term_id}
							placeholder={subtype.name}
							onChange={e => this.props.onChange(e, type)}
							defaultChecked={selected.indexOf(`${subtype.term_id}`) !== -1 || selected.indexOf(`${subtype.parent}`) !== -1}
						/>
					))}
				</div>
				<style jsx>{`
				button {
					padding: 0;
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

					.subtypes {
						visibility: hidden;
						height: 0;
					}

					.subtypes-open {
						visibility: visible;
						height: auto;
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

export default FilterType;
