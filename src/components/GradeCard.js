import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../logo.png';

const useStyles = makeStyles((theme) => ({
	appbar: {
		background: '#011010',
		margin: 0,
	},
}));

function GradeCard(props) {
	const classes = useStyles();

	return (
		<Box className={classes.menuSliderContainer} component='div'>
			<Avatar className={classes.logo} src={logo} alt='NBrown logo' />
			<Divider />
		</Box>
	);
}

export default GradeCard;
