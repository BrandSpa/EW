import React, { Component } from 'react';
import fetchwp from '../../lib/fetchwp';

class Uploader extends Component {
	state = {
		url: this.props.url,
	}

	componentDidMount() {
		this.setState({ ...this.state, ...this.props });
	}

	openMediaUploader = () => {
		const id = this.state.id;

		const media_uploader = wp.media({
			// frame: 'select',
			frame: 'post',
			state: 'insert',
			multiple: false,
		});

		const promise = new Promise((resolve) => {
			media_uploader.on('insert', () => {
				const json = media_uploader.state().get('selection').first().toJSON();
				console.log('json', json);
				return resolve(json);
			});
		});


		media_uploader.open();

		return promise;
	};

	handleClick = (e) => {
		this.openMediaUploader()
			.then((res) => {
				console.log(res);
				this.setState({ url: res.url });
			});
	}

	clean = (e) => {
		e.preventDefault();
		this.setState({ url: '' });
	}

	render() {
		const { name } = this.props;

		return (
			<section>
				<p>
					<input name={name} onClick={this.handleClick} value={this.state.url} />
					<button className="button" onClick={this.clean}>Remove</button>
				</p>

				<style jsx> {`
				p {
					display: flex;
				}
				input, select {
					display: block;
					width: 100%;
					height: 35px;
					margin-bottom: 15px;
					margin-right: 20px;
				}

			`}
				</style>
			</section>
		);
	}
}

export default Uploader;
