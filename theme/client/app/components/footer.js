import React, { Component } from 'react';

class Footer extends Component {
	render() {
		console.log(this.props);
		const { menu_right = [] } = this.props;
		
		let newMenu = menu_right.map(item => {
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
			<section>

				<div className="footer__menu">
					<ul>
						{newMenu.map(item =>
							<li>{item.title}</li>
						)}
					</ul>
				</div>

				<style jsx>{`
					section {
						position: relative;
						z-index: 100;
						height: 700px;
						width: 100%;
						background: #000;
					}
				`}</style>
			</section>
		);
	}
}

export default Footer;
