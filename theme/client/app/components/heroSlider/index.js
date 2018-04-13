import React, { Component } from 'react';
import Slide from './slide';
import Menu from './menu';
import SocialIcon from '../social/icon';
import Prelaod from 'react-preload';
//import Loading from './preloading';

class HeroSlider extends Component {
	state = {
		slide: 1,
	}

	componentDidMount() {
		const total = this.props.slides.length;
		if (total > 0) {
			this.interval = setInterval(() => {
				const { slide } = this.state;
				this.setState({ slide: slide < total ? slide + 1 : 1 });
			}, 5000);
		}
	}

	changeSlide = (e, i) => {
		e.preventDefault();
		clearInterval(this.interval);
		this.setState({ slide: i + 1 });
	}

	render() {
		const { slides } = this.props;
		const slideNum = this.state.slide - 1;
		const slide = slides[slideNum];
		const { bg } = slide;

		var loadingIndicator = (<div />)

		return (
			<Prelaod
				loadingIndicator={loadingIndicator}
				images={[bg]}
				autoResolveDelay={3000}
				mountChildren
                resolveOnError
			>
			<section className="heroSlider" style={{ background: `url(${bg}) no-repeat` }}>
				{slides.map((slide, i) => <Slide {...slide} key={i} index={i} current={slideNum} />)}

				<div className="heroSlider__nav">
					{slides.map((s, i) => (
						<button key={i} onClick={e => this.changeSlide(e, i)}>
							{ slideNum === i && <span />}
						</button>
					))}
				</div>
				{/* <div className="social">
					<div className="social__icon">
						<SocialIcon iconClass="ion-social-twitter" />
					</div>
					<div className="social__icon">
						<SocialIcon iconClass="ion-social-instagram-outline" />
					</div>
				</div>
				*/}

				{this.props.links &&
					<Menu links={this.props.links} />
				}

				<style jsx>{`
					.heroSlider {
						display: flex;
						position: relative;
						width: 100%;
						min-height: 100vh;
						background-size: cover !important;
						background-color: #000;
						justify-content: flex-start;
    				flex-direction: column;
						transition: all .3s;
					}

					.heroSlider__nav {
						display: flex;
						margin-top: 40px;
						margin-left: 60px;
					}

					.heroSlider__nav button {
						display: flex;
						align-items: center;
						justify-content: center;
						background: transparent;
						width: 30px;
						height: 30px;
						border: solid 1px #039ed8;
						border-radius: 0;
						outline: none;
						margin-right: 10px;
					}

					.heroSlider__nav button span {
						display: block;
						width: 10px;
						height: 10px;
						background: #fff;
					}

					.social {
						position: absolute;
						bottom: 60px;
						left: 20px;
						display: none;
					}

					.social__icon {
						margin-bottom: 20px;
					}

					@media (min-width: 1024px) {

						.heroSlider {
							justify-content: center;
						}

						.heroSlider__nav {
							margin-left: 140px;
						}

						.heroSlider__nav button {
							width: 40px;
							height: 40px;
						}

						.social {
							display: block;
						}
					}
				`}
				</style>
			</section>
			</Prelaod>
		);
	}
}

export default HeroSlider;
