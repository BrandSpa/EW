import React, { Component } from 'react';

class GalleryUploader extends Component {
	state = {
		thumb: '',
		id: '' 
	}

	componentDidMount() {

		const openMediaUploader = () => {
			const id = this.state.id;

			const media_uploader = wp.media({
				// frame: 'select',
				multiple: false,
			});

		const promise = new Promise((resolve) => {
				media_uploader.on('select', () => {
					const json = media_uploader.state().get('selection').first().toJSON();
					return resolve(json);
				});
			});

		media_uploader.on('open', () => {
			const selection = media_uploader.state().get('selection');
			wp.media.attachment(id)

		});

		media_uploader.open();
	
		return promise;
	};

	this.btn.addEventListener('click', (e) => {
		e.preventDefault();
		openMediaUploader()
		.then(img => {
			const id = img.id;
			const thumb = img.sizes.thumbnail ? img.sizes.thumbnail.url : img.url

			this.setState({ id, thumb });
		});
	})
	}

	render() {
		const { id, thumb } = this.state;
		const { name } = this.props;

		return (
			<section>
				<p>
					<button className="button" ref={ref => this.btn = ref}>Add image</button>
				</p>
				<input type="hidden" name={name} value={id} />
				{thumb && <img src={thumb} alt="" width="150"/>}
				
				<style jsx>{`
					.gallery {
						display: flex;
						flex-wrap: wrap;
					}

					.gallery img {
						margin-left: 15px;
						margin-bottom: 15px;
					}
				`}</style>
			</section>
		)
	}
}

export default GalleryUploader;
