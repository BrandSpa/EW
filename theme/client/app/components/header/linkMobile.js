import React, { Component } from 'react';
import classNames from 'classnames';

class MenuLinkMobile extends Component {
	state = {
		hover: false,
	}

	handleClick = (e, item) => {
		e.preventDefault();
		if(item.sub && item.sub.length > 0) {
			this.setState({ hover: !this.state.hover });
		} else {
			window.location = item.url;
		}

	}

	render() {
		const { item } = this.props;
		const submenuClass = classNames('header__submenu', {
			'header__submenu--show': this.state.hover,
		});

		const imgClass = classNames('', {
			'img-turn': this.state.hover,
		})

		return (
			<li
				className="header__menu-link"
			>
				<a href={item.url} onClick={(e) => this.handleClick(e, item)}>{item.title} {item.sub && item.sub.length > 0 && <img className={imgClass} src={`${this.props.uri}/public/img/arrow.svg`} />}</a>
				{item.sub &&
						<ul className={submenuClass}>
							{item.sub.map((subItem, i) => <li key={subItem.ID}><a href={subItem.url}><div dangerouslySetInnerHTML={{__html: subItem.title}} /></a></li>)
							}
						</ul>
				}
				<style jsx>{`
					.header__menu-link {
						margin-right: 40px;
						position: relative;
						padding-bottom: 20px;
					}

					.header__menu-link > a {
						color: #fff;
						padding-bottom: 20px;
						font-size: 18px;
					}

					.header__menu-link > a img {
						margin-left: 15px;
						transition: all .2s;
					}

					.img-turn {
						transform-origin: center center;
						transform: rotate(180deg)
					}

					.header__submenu {
							display: none;
							padding: 20px 0 0 30px;

							flex-direction: column;
							min-width: 150px;
							transition: all .3s;
							top: 40px;
							transform: translateY(-10px);
						}

						.header__submenu--show {
							display: flex;
							visibility: visible;
							transform: translateY(0);
						}

						.header__submenu li a {
							display: block;
							color: #039ed8;
							font-size: 15px;
							float: left;
							padding-bottom: 5px;
							margin-bottom: 5px;
							border-bottom: 1px solid #039ed8;
						}

						.header__submenu li:last-child a {
							border: none;
						}
				`}
				</style>
			</li>
		);
	}
}

export default MenuLinkMobile;
