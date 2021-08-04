import React, { useState } from 'react';
import '../styles/Form.css';

import { checkInput, validateEmail } from '../utils/helpers';

function Form() {
	const [email, setEmail] = useState('');
	const [userName, setUserName] = useState('');
	const [message, setMessage] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const handleInputChange = (e) => {
		const { target } = e;
		const inputType = target.name;
		const inputValue = target.value;

		if (inputType === 'email') {
			setEmail(inputValue);
		} else if (inputType === 'userName') {
			setUserName(inputValue);
		} else {
			setMessage(inputValue);
		}
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		if (!validateEmail(email)) {
			setErrorMessage('Email is invalid');
			return;
		}

		if (checkInput(email)) {
			setErrorMessage('Please provide email');
			return;
		}

		if (checkInput(userName)) {
			setErrorMessage('Please provide your name');
			return;
		}

		if (checkInput(message)) {
			setErrorMessage('Please provide a message');
			return;
		}

		alert(
			`Hello ${userName}, thank you for the message. I will contact you as soon as possible to answer any questions.`
		);

		setUserName('');
		setEmail('');
		setMessage('');
	};

	return (
		<div>
			<form className='form'>
				<input
					value={email}
					name='email'
					onChange={handleInputChange}
					type='email'
					placeholder='your email'
				/>
				<input
					value={userName}
					name='userName'
					onChange={handleInputChange}
					type='text'
					placeholder='your name'
				/>
				<input
					value={message}
					name='message'
					onChange={handleInputChange}
					type='message'
					placeholder='your message'
				/>
				<button type='button' onClick={handleFormSubmit}>
					Submit
				</button>
			</form>
			{errorMessage && (
				<div>
					<p className='error-text'>{errorMessage}</p>
				</div>
			)}
		</div>
	);
}

export default Form;
