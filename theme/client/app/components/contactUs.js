import React, { Component } from 'react';

const validate = (str) => {
	const s = typeof str === 'string' ? str.trim() : '';
	return s.length === 0;
};

function validateEmail(email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

class contactUs extends Component {
	state = {
		name: '',
		email: '',
		message: '',
		loading: false,
		complete: false,
		errors: {
			name: false,
			email: false,
			message: false,
		},
	}

	handleChange = e => this.setState({ [e.target.name]: e.target.value })

	isValid = () => {
		const errors = Object.keys(this.state.errors).reduce((obj, field) => {
			let v = validate(this.state[field]);
			if (field === 'email') v = !validateEmail(this.state[field]);
			obj[field] = v;
			return obj;
		}, {});

		this.setState({ errors });

		const invalid = Object.keys(errors).some(err => errors[err]);
		return !invalid;
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const { name, email, message} = this.state;
		const contact = {
			name,
			email,
			message,
		};
		const isValid = this.isValid();
		this.setState({ loading: true });
		if (isValid) {
			console.log(contact);
			this.setState({ complete: true });
		} else {
			this.setState({ loading: false });
		}
	}

	render() {
		const {
			name,
			email,
			message,
			errors,
			loading,
			complete,
		} = this.state;
		const { placeholders = {} } = this.props;

		return (
			<form onSubmit={this.handleSubmit}>
				<h4 className={complete ? "message-show" : "message"}>{"thanks for reaching us, we're going to contact you soon."}</h4>
				<section className={complete && "form-hide"}>
					<div className="row">
						<div className="col-lg-6">
							<div className="input-container">
								<input
									type="text"
									name="name"
									placeholder={placeholders.name}
									className={errors.name && 'input-err'}
									onChange={this.handleChange}
									value={name}
								/>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="input-container">
								<input
									type="text"
									name="email"
									placeholder={placeholders.email}
									className={errors.email && 'input-err'}
									onChange={this.handleChange}
									value={email}
								/>
							</div>
						</div>
					</div>
					<div className="input-contain">
						<textarea
							name="message"
							rows="7"
							placeholder={placeholders.message}
							className={errors.message && 'input-err'}
							onChange={this.handleChange}
							value={message}
						/>
					</div>
					<div className="row">
						<div className="col-lg-6" />
						<div className="col-lg-6">
							<button disabled={loading}>{placeholders.send}</button>
						</div>

					</div>
				</section>
				<style jsx>{`
					.input-container {
						width: 100%;
						margin-bottom: 20px;
					}

					.input-err {
						border-color: red;
					}

					.form-hide {
						display: none;
					}

					.message {
						display: none;
					}

					.message-show {
						display: block;
					}

					input, textarea {
						width: 100%;
						border: 1px solid #039ED8;
						background: transparent;
						padding: 10px;
						transition: all .3s;
					}

					input {
						height: 40px
					}

					button {
						border: 1px solid #039ED8;
						height: 40px;
						text-align: center;
						color: #039ED8;
						font-size: 15px;
						background: transparent;
						float: right;
						margin-top: 20px;
						width: 100%;
					}

					input::-webkit-input-placeholder,
					textarea::-webkit-input-placeholder,
					{
						color: #fff;
					}

					input::-moz-placeholder,
					textarea::-moz-placeholder,
					{
						color: #fff;
					}

					input:-ms-input-placeholder,
					textarea:-ms-input-placeholder,
					{
						color: #fff;
					}
				`}</style>
			</form>
		);
	}
}

export default contactUs;
