import React, { Component } from 'react';
import fetchwp from '../../lib/fetchwp';

class SingleUploader extends Component {
	state = {
		thumb: '',
		id: this.props.imageId,
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
				wp.media.attachment(id);
			});

			media_uploader.open();

			return promise;
		};

		this.btn.addEventListener('click', (e) => {
			e.preventDefault();
			openMediaUploader()
				.then((img) => {
					const id = img.id;
					const thumb = img.sizes.thumbnail ? img.sizes.thumbnail.url : img.url;

					this.setState({ id, thumb });
				});
		});
	}

	componentWillReceiveProps(props) {
		console.log(this.state.thumb && this.state.thumb.length == 0);
		if(this.state.thumb.length == 0) {
			console.log('get image');
			fetchwp('get_image_url', { id: props.imageId })
			.then(res => this.setState({ thumb: res.data.url }));
		}
	}

	render() {
		const { id, thumb } = this.state;
		const { name, imageId } = this.props;

		return (
			<section>
				<p>
					<button className="button" ref={ref => this.btn = ref}>Add image</button>
				</p>
				<input type="hidden" name={name} value={id || imageId} />
				{thumb && <img src={thumb} alt="" width="150" />}

				<style jsx>{`
					.gallery {
						display: flex;
						flex-wrap: wrap;
					}

					.gallery img {
						margin-left: 15px;
						margin-bottom: 15px;
						max-height: 150px;
					}
				`}
				</style>
			</section>
		);
	}
}

export default SingleUploader;
