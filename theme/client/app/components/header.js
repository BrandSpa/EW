import React, { Component } from 'react';
import { find } from 'lodash';

class Header extends Component {

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

		console.log(menu);
		return (
			<section className="header">
			<div className="logo-container">
				ESWINDOWS
			</div>
			<div className="menu-container">
				<ul>
					{newMenu.map(item =>
							<li>
								{item.title}
									<ul>
									{item.sub && item.sub.map(subItem => <li>{subItem.title}</li>)}
									</ul>
							</li>
					)}
				</ul>
			</div>
			<style jsx>{`
          .header {
						display: flex;
						width: 100%;
						flex-direction: column;
						z-index: 900;
					}
					.menu-container {
						align-self: flex-end;
						margin-right: 60px
					}
        `}</style>
		</section>
		)
	}
}

export default Header;