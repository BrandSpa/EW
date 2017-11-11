import React, { Component } from 'react';
import Slide from './slide';

class HeroSlider extends Component {

	state = {
		slide: 1
	}
	
	componentDidMount() {
		const total = this.props.slides.length;
		const { slide } = this.state;
		if(total > 0) {
			this.interval = setInterval(() => {
				this.setState({slide: slide < total ? slide + 1 : 1});
			}, 5000);
		}
	}

	render() {
		const { slides } = this.props;
		const slideNum = this.state.slide - 1;
		const slide = slides[slideNum];
		
		return (
			<section className="heroSlider">
				<Slide {...slide} />
				<style jsx>{`
					.heroSlider {
						display: flex;
						width: 100%;
					}
				`}</style>
			</section>
		)
	}
}

export default HeroSlider;
