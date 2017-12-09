import React from 'react';

const TwitterIcon = ({ iconClass }) => {
	return (
		<a href="#">
			<i className={iconClass}></i>
			<style jsx>{`
				a {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 40px;
					height: 40px;
					border-radius: 40px;
					background: #fff;
				}

				a i {
					font-size: 27px;
					color: #5D5D5D;
				}
			`}</style>
		</a>
	)
}

export default TwitterIcon;