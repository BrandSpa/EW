import React, { Component } from 'react';

const HeroSliderMenu = ({ links }) => (
	<ul>
		{links.map((link, i) => <li key={i}><a href={link.url}>{link.title}</a></li>)}
		<style jsx>{`
				ul {
					position: absolute;
					right: 0;
					bottom: 80px;
				}

				li a {
					display: block;
					border: solid 1px #039ed8;
					padding: 20px 40px;
					font-size: 20px;
					border-right: none;
					border-bottom: none;
					color: #fff;
				}

				li a:last-child {
					border-bottom: solid 1px #039ed8;
				}

				@media (min-width: 1024px) {
					ul {
						bottom: 20%;
					}

					li a {
						font-size: 30px;
					}
				}
			`}
		</style>
	</ul>
);

export default HeroSliderMenu;
