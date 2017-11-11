import React, { Component } from 'react';
import Slide from './slide';

class HeroSlider extends Component {

	state = {
		slide: 1
	}
	
	componentDidMount() {
		const total = this.props.slides.length;
		if(total > 0) {
			this.interval = setInterval(() => {
				const { slide } = this.state;
				this.setState({slide: slide < total ? slide + 1 : 1});
			}, 5000);
		}
	}

	changeSlide = (e, i) => {
		console.log(i, e);
		// e.preventDefault();

	}

	render() {
		const { slides } = this.props;
		const slideNum = this.state.slide - 1;
		const slide = slides[slideNum];
		
		return (
			<section className="heroSlider">
				<Slide {...slide} />
				<div className="heroSlider__nav">
					{slides.map((s, i) => {
						return <button onClick={() => this.changeSlide(i)} />
					})}
					
				</div>
				<style jsx>{`
					.heroSlider {
						display: flex;
						width: 100%;
					}

					.heroSlider__nav {
						display: flex;
					}

					.heroSlider__nav button {
						display: block;
						background: transparent;
						width: 30px;
						height: 30px;
						border: solid 1px #039ed8;
					}

					@media (min-width: 1024px) {
						.heroSlider__nav button {
							width: 40px;
							height: 40px;
						}
					}
				`}</style>
			</section>
		)
	}
}

export default HeroSlider;
