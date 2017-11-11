import React, { Component } from 'react';
import { find } from 'lodash';

class Header extends Component {

	state = {
		uri: window.templateUri
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
				<img src={`${this.state.uri}/public/img/logo.png`} alt=""/>

				</div>
				<div className="header__menu">
					<ul>
						{newMenu.map(item =>
								<li key={item.ID}>
									<a href="#">{item.title}</a> <img src={`${this.state.uri}/public/img/arrow.svg`}/>
										<ul>
										{item.sub && item.sub.map(subItem => <li key={subItem.ID}>{subItem.title}</li>)}
										</ul>
								</li>
						)}
					</ul>
				</div>
				<style jsx>{`
						.header {
							position: fixed;
							display: flex;
							width: 100%;
							z-index: 900;
							padding: 60px 40px 0 40px;
						}

						.header__menu {
							align-self: flex-end;
						}

						.header__menu ul {
							padding: 0;
							display: flex;
						}
						
						.header__menu ul > li {
							margin-right: 40px;
						}

						.header__menu ul li a {
							color: #fff;
						}
					`}</style>
		</section>
		)
	}
}

export default Header;