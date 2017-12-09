import React, { Component } from 'react';

class GalleryUploader extends Component {
	state = {
		thumbs: [],
		ids: [],
	}

	componentDidMount() {
		const openMediaUploader = () => {
			const { ids } = this.state;
			const mediaUploader = wp.media({
				// frame: 'select',
				multiple: true,
			});

			const promise = new Promise((resolve) => {
				mediaUploader.on('select', () => {
					const json = mediaUploader.state().get('selection').toJSON();
					return resolve(json);
				});
			});

			mediaUploader.on('open', () => {
				const selection = mediaUploader.state().get('selection');
				ids.map(id => selection.add(wp.media.attachment(id)));
			});

			mediaUploader.open();
			return promise;
		};

		this.btn.addEventListener('click', (e) => {
			e.preventDefault();
			openMediaUploader()
				.then((res) => {
					const ids = res.map(img => img.id);

					const thumbs = res.map((img) => {
						return { url: img.sizes.thumbnail ? img.sizes.thumbnail.url : img.url };
					});

					this.setState({ ids, thumbs });
				});
		});
	}

	render() {
		const { ids , thumbs } = this.state;
		const { name } = this.props;

		return (
			<section>
				<p>
					<button className="button" ref={ref => this.btn = ref}>Add images</button>
				</p>
				<input type="hidden" name={name} value={ids} />
				<div className="gallery">
				{thumbs.map(thumb => 
					<img src={thumb.url} alt="" width="150"/>
				)}
				</div>
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
