import React from 'react';

const Product = ({
	name, type, subtype, thumb, url,
}) => (
	<div className="product-container">
		<a href={url.replace('#038;', '&')} className="product-item" style={{ backgroundImage: `url(${thumb})` }}>
			<div	className="product-img" style={{ backgroundImage: `url(${thumb})` }}></div>
			<div className="product__details">
				<span className="product-name">{name}</span>
				<span className="product-type">{type}</span>
				<span className="product-subtype">{subtype}</span>
			</div>
		</a>
		<style jsx>{`
		.product-item {
			display: flex;
			position: relative;
			background-position: center;
			background-size: cover !important;
			min-height: 260px;
			color: #5D5D5D;
			margin-bottom: 2px;
		}

		.product-container {
			background: #fff;
		}

		.product__details {
			padding: 20px;
			background: rgba(255, 255, 255, .8);
			position: absolute;
			width: 100%;
			bottom: 0;
			display: flex;
			flex-direction: column;
			min-height: 110px;
		}

		.product-name {
			font-size: 19px;
			margin-bottom: 20px;
			color: #039ED8;
		}

		.product-type, .product-subtype {
			font-size: 15px;
			color: #039ED8;
		}

		@media (min-width: 1024px) {
			.product-item {

			}

			.product-img {
				display: none
			}
		}

	`}
		</style>
	</div>
);


export default Product;
