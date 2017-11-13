import React, { Component } from 'react';
import classNames from 'classnames';

class HeaderLink extends Component {
	state = {
		hover: false
	}

	handleHover = () => {
		this.setState({ hover: true });
	}

	handleOut = () => {
		this.setState({ hover: false });
	}

	render() {
		const { item } = this.props;
		const submenuClass = classNames('header__submenu', {
			'header__submenu--show': this.state.hover
		});

		return (
			<li 
				className="header__menu-link"
				onMouseEnter={this.handleHover} 
				onMouseLeave={this.handleOut}
			>
				<a href="#">{item.title} {item.sub && item.sub.length > 0 && <img src={`${this.props.uri}/public/img/arrow.svg`}/>}</a>
					{item.sub &&
						<ul className={submenuClass}>
							{item.sub.map((subItem, i) => {
								return <li key={subItem.ID}><a href="#">{subItem.title}</a></li>
								})
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
					}

					.header__menu-link > a img {
						padding-left: 15px;
					}

					.header__submenu {
							background: #fff;
							padding: 15px;
							position: absolute;
							display: flex;
							flex-direction: column;
							min-width: 150px;
							transition: all .3s;
							top: 40px;
							opacity: 0;
							visibility: hidden;
							transform: translateY(-10px);
						}

						.header__submenu--show {
							display: block;
							opacity: 1;
							visibility: visible;
							transform: translateY(0);
						}

						.header__submenu li a {
							display: block;
							color: #039ed8;
							width: 100%;
							font-size: 15px;
							padding-bottom: 5px;
							margin-bottom: 5px;
							border-bottom: 1px solid #039ed8;
						}

						.header__submenu li:last-child a {
							border: none;
						}
				`}</style>
			</li>
		)
	}
}

export default HeaderLink;
