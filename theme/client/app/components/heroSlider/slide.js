import React, { Component } from 'react';

class HeroSlide extends Component {

	render() {
		const { bg, title, content } = this.props;

		return (
			<section className="heroSlide" style={{ background: `url(${bg})` }}>
				<div className="heroSlide__content">
					<div className="title">
						<h2>{title}</h2>
					</div>
					<div className="line"></div>
					<div className="body">
						<p>{content}</p>
					</div>
				</div>
				<style jsx>{`
					.heroSlide {
						display: flex;
						width: 100%;
						min-height: 100vh;
						background-size: cover
						color: #fff;
						justify-content: center;
    				flex-direction: column;
					}

					.heroSlide__content {
						width: 60%;
					}
					
					.title h2 {
						font-size: 40px;
						font-family: 'Yantramanav';
					}

					.line {
						width: 60px;
						height: 1px;
						border: solid 1px #039ed8;
					}

					.body p {
						font-size: 14px;
					}

					@media (min-width: 1024px) {
						.title h2 {
							font-size: 100px;
						}

						.content p {
							font-size: 24px;
						}
					}
				`}</style>
			</section>
		)
	}
}

export default HeroSlide;
