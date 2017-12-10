import React, { Component } from 'react';
import classNames from 'classnames';

const HeroSlide = ({
	title, content, index, current,
}) => {
	const heroSlideClass = classNames('heroSlide', {
		'heroSlide--show': index === current,
	});

	return (
		<section className={heroSlideClass} >
			<div className="heroSlide__content">
				<div className="title">
					<h2>{title}</h2>
				</div>
				<div className="line" />
				<div className="body">
					<p>{content}</p>
				</div>
			</div>
			<style jsx>{`
					.heroSlide {
						display: flex;
						width: 100%;
						color: #fff;
						padding-left: 60px;
						margin-top: 20%;
						transition: opacity .3s;
						position: absolute;
						visibility: hidden;
						opacity: 0;
					}

					.heroSlide--show{
						position: relative;
						visibility: visible;
						opacity: 1;
					}

					.heroSlide__content {
						width: 90%;
					}

					.title h2 {
						font-size: 40px;
						font-family: 'Yantramanav';
						line-height: 0.9;
					}

					.line {
						width: 60px;
						height: 1px;
						margin: 30px 0;
						border: solid 1px #039ed8;
					}

					.body p {
						font-size: 14px;
						line-height: 1.54;
					}

					@media (min-width: 1024px) {
						.heroSlide {
							margin-top: 0;
							padding-left: 140px;
						}

						.heroSlide__content {
							width: 50%;
						}

						.title h2 {
							font-size: 100px;
						}

						.body p {
							font-size: 24px;
						}
					}
				`}
			</style>
		</section>
	);
};

export default HeroSlide;
