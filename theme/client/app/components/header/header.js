import React, { Component } from 'react';
import { find } from 'lodash';
import Link from './link';

class Header extends Component {

	state = {
		uri: window.templateUri,
	}

	render() {
		const { menu } = this.props;
		
		let newMenu = menu.map(item => {
			const parentId = parseInt(item.menu_item_parent);

			if(parentId > 0) {
				const parent = find(menu, {ID: parentId});
				parent['sub'] = parent.sub ? parent.sub.concat([item]) : [].concat([item]);
				return item;
			} else {
				return item;
			}
		});

		newMenu = menu.filter(item => parseInt(item.menu_item_parent) === 0); 

		return (
			<section className="header">
				<div className="logo-container">
					<a href="/">
						<img src={`${this.state.uri}/public/img/logo.png`} alt=""/>
					</a>
				</div>
				<div className="header__menu">
					<ul>
						{newMenu.map(item =>
							<Link item={item} uri={this.props.uri} />	
						)}
					</ul>
				</div>
				<style jsx>{`
						.header {
							position: fixed;
							display: flex;
							width: 100%;
							z-index: 900;
							padding: 30px 40px 0 40px;
							justify-content: space-between;
						}

						.header__menu {
							display: none;
							align-self: flex-end;
						}

						.header__menu > ul {
							padding: 0;
							display: flex;
						}

						.logo-container {
							margin-left: 100px;
						}

						@media (min-width: 1024px) {
							.header {
								padding-top: 60px;
							}
							.header__menu  {
								display: flex;
							}
						}
						
					`}</style>
		</section>
		)
	}
}

export default Header;