import React, { Component } from 'react';
import classNames from 'classnames';
import LinkMobile from './linkMobile';

class MenuMobile extends Component {
	state = {
		show: false
	}

	toggleMenu = (e) => {
		if(e) e.preventDefault();
		this.setState({ show: !this.state.show }, () => document.body.classList.toggle("menu-open"));
	}

	render() {
		const { show } = this.state;
		const containerClass = classNames('header__menu-mobile-container', {
			'header__menu-mobile-container-open': show
		});

		return (
			<section className="header__menu-mobile">
				<a href="#" onClick={this.toggleMenu} className="toggler"><i className="ion-navicon"></i></a>
				<div className={containerClass}>
					<a href="#" onClick={this.toggleMenu} className="closer"><i className="ion-android-close"></i></a>
					<ul>
					{this.props.menu.map(item => (
						<LinkMobile key={item.ID} item={item} uri={this.props.uri} />
					))}
					</ul>
				</div>
				<style jsx>{`
					.header__menu-mobile {
						display: flex;
						position: relative;
					}

					.toggler {
						display: block;
						color: #039ED8;
						font-size: 30px;
						margin-right: 40px;
						margin-top: -10px;
					}

					.closer {
						position: absolute;
						right: 40px;
						top: 20px;
						font-size: 30px;
					}

					.header__menu-mobile-container {
						position: fixed;
						width: 95%;
						height: 100vh;
						background: rgba(0,0,0, .8);
						overflow: scroll;
						z-index: 999;
						top: 0;
						right: -200%;
						transition: all .3s;
					}

					.header__menu-mobile-container-open {
						right: 0%;
					}

					.header__menu-mobile-container ul {
						margin-top: 90px;
					}

					@media (min-width: 1024px) {
						.header__menu-mobile-container {
							display: none;
						}

						.toggler {
							display: none;
						}

					}

				`}</style>
			</section>
		)
	}
}

export default MenuMobile;