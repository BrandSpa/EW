import React, { Component } from 'react';

class HeroSlide extends Component {

	render() {
		const { bg, title, content } = this.props;

		return (
			<section className="heroSlide" style={{ background: `url(${bg})` }}>
				<div className="title">
					<h2>{title}</h2>
				</div>
				<div className="line"></div>
				<div className="content">
					<p>{content}</p>
				</div>
				<style jsx>{`
					.heroSlide {
						min-height: 100vh;
						background-size: cover
						color: #fff;
					}
				`}</style>
			</section>
		)
	}
}

export default HeroSlide;
