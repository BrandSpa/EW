import React from 'react';

const TwitterIcon = ({ iconClass, url }) => (
	<a href={url} target="_blank" rel="noopener">
		<i className={iconClass} />
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
			`}
		</style>
	</a>
);

export default TwitterIcon;
