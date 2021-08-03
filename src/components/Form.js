import React, { useState } from 'react';
import '../styles/Form.css';

function Form() {
	const [email, setEmail] = useState('');
	const [userName, setUserName] = useState('');
	const [message, setMessage] = useState('');

	const handleInputChange = (e) => {
		const { target } = e;
		const inputType = target.name;
		const inputValue = target.value;

		// Based on the input type, we set the state of either email, username, and password
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

		alert(
			`Hello ${userName}, thank you for the message. I will contact you as soon as possible to answer any questions.`
		);

		setUserName('');
		setEmail('');
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
		</div>
	);
}

export default Form;
