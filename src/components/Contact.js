import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Send from '@material-ui/icons/Send';
import emailjs from 'emailjs-com';

const useStyles = makeStyles((theme) => ({
	contactContainer: {
		background: '#011010',
		height: '100vh',
	},
	heading: {
		color: 'DarkRed',
		textAlign: 'center',
		textTransform: 'uppercase',
		marginBottom: '1rem',
	},
	form: {
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		position: 'absolute',
	},
	input: {
		color: '#fff',
	},
	button: {
		marginTop: '1rem',
		color: 'DarkRed',
		borderColor: 'tan',
	},
	field: {
		margin: '1rem 0rem',
	},
}));

const InputField = withStyles({
	root: {
		'& label.Mui-focused': {
			color: 'DarkRed',
		},
		'& label': {
			color: 'tan',
		},
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: 'tan',
			},
			'&:hover fieldset': {
				borderColor: 'tan',
			},
			'&.Mui-focused fieldset': {
				color: '#fff',
				borderColor: 'tan',
			},
		},
	},
})(TextField);

const Contact = () => {
	const classes = useStyles();

	const [contact, setContact] = useState({
		from_name: '',
		email: '',
		message: '',
	});

	function handleInputChange(e) {
		setContact({ ...contact, [e.target.name]: e.target.value });
	}

	const isFormValid = () => {
		if (!contact.from_name || !contact.email || !contact.message) {
			return false;
		} else {
			return true;
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!isFormValid()) {
			console.log(
				`form not valid for name: ${contact.from_name} email: ${contact.email} message: ${contact.message} `
			);
		} else {
			sendEmail(e);
		}
	};

	function sendEmail(e) {
		const user = emailjs.init('user_pszOFvg0viSsmv0WHmfwM');
		const service = 'service_y76i3so';
		const template = 'template_tt31z6s';

		emailjs.sendForm(service, template, e.target, user).then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);
	}

	return (
		<Box component='div' className={classes.contactContainer}>
			<Grid container justify='center'>
				<form
					component='form'
					className={classes.form}
					onSubmit={(e) => handleSubmit(e)}
				>
					<Typography variant='h5' className={classes.heading}>
						Contact me...
					</Typography>
					<InputField
						fullWidth={true}
						name='from_name'
						label='Name'
						onChange={handleInputChange}
						variant='outlined'
						inputProps={{ className: classes.input }}
					/>
					<InputField
						fullWidth={true}
						name='email'
						label='Email'
						onChange={handleInputChange}
						variant='outlined'
						inputProps={{ className: classes.input }}
						className={classes.field}
					/>
					<InputField
						fullWidth={true}
						name='message'
						label='Message'
						onChange={handleInputChange}
						variant='outlined'
						multiline
						rows={4}
						inputProps={{ className: classes.input }}
					/>
					<Button
						variant='outlined'
						fullWidth={true}
						endIcon={<Send />}
						className={classes.button}
						type='submit'
						value='Submit'
					>
						Contact Me
					</Button>
				</form>
			</Grid>
		</Box>
	);
};

export default Contact;
