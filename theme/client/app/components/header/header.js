import React, { Component } from 'react';
import { find, throttle } from 'lodash';
import classNames from 'classnames';
import Link from './link';

class Header extends Component {
	state = {
		uri: window.templateUri,
		onTop: true,
		menu: [],
	}

	componentDidMount() {
		this.getMenu();
		this.handleScroll();
	}

	handleScroll = () => {
		window.addEventListener('scroll', throttle((e) => {
			this.setState({ onTop: window.scrollY === 0 });
		}, 100));
	}

	getMenu = () => {
		const { menu } = this.props;

		let newMenu = menu.map((item) => {
			const parentId = parseInt(item.menu_item_parent);

			if (parentId > 0) {
				const parent = find(menu, { ID: parentId });
				parent.sub = parent.sub ? parent.sub.concat([item]) : [].concat([item]);
				return item;
			}
			return item;
		});

		newMenu = menu.filter(item => parseInt(item.menu_item_parent) === 0);

		this.setState({ menu: newMenu });
	}

	render() {
		const headerClass = classNames('header', {
			'header--scroll': !this.state.onTop,
		});

		return (
			<section className={headerClass} ref={ref => this.header = ref}>
				<div className="logo-container">
					<a href="/">
						<img src={`${this.state.uri}/public/img/logo.png`} alt="" />
					</a>
				</div>
				<div className="header__menu">
					<ul>
						{this.state.menu.map(item =>
							<Link key={item.ID} item={item} uri={this.state.uri} />)}
					</ul>
				</div>
				<style jsx>{`
					.header {
							position: fixed;
							display: flex;
							width: 100%;
							z-index: 900;
							padding: 30px 0;
							justify-content: space-between;
							transition: all .3s;
					}

						.header--scroll {
							background: rgba(0,0,0,.9)
						}

						.logo-container {
							margin-left: 40px;
						}

						.logo-container img {
							width: 120px;
						}

						.header__menu {
							display: none;
							align-self: flex-end;
						}

						.header__menu > ul {
							padding: 0;
							display: flex;
						}

						@media (min-width: 1024px) {
							.header {
								padding-top: 50px;
								padding-bottom: 10px;
							}

							.logo-container {
								margin-left: 140px;
							}

							.logo-container img {
								width: 170px;
							}

							.header__menu  {
								display: flex;
							}
						}

					`}
				</style>
			</section>
		);
	}
}

export default Header;
