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
		e.preventDefault();
		clearInterval(this.interval);
		this.setState({slide: i + 1});
	}

	render() {
		const { slides } = this.props;
		const slideNum = this.state.slide - 1;
		const slide = slides[slideNum];
		const { bg } = slide; 
		return (
			<section className="heroSlider" style={{ background: `url(${bg})` }}>
				<Slide {...slide} />
				<div className="heroSlider__nav">
					{slides.map((s, i) => {
						return <button onClick={(e) => this.changeSlide(e, i)} />
					})}
					
				</div>
				<style jsx>{`
					.heroSlider {
						display: flex;
						width: 100%;
						min-height: 100vh;
						background-size: cover;
						backgroundColor: '#333';
						justify-content: center;
    				flex-direction: column;
						transition: all .3s;
					}

					.heroSlider__nav {
						display: flex;
						margin-top: 40px;
						margin-left: 40px;
					}

					.heroSlider__nav button {
						display: block;
						background: transparent;
						width: 30px;
						height: 30px;
						border: solid 1px #039ed8;
						border-radius: 0;
						outline: none;
						margin-right: 10px;
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
