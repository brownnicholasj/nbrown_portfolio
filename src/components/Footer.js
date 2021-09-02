import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import GitHub from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Resume from '@material-ui/icons/Description';

const useStyles = makeStyles({
	bottomNavContainer: {
		background: '#292929',
	},
	root: {
		'& .MuiSvgIcon-root': {
			'fill': '#9e9e9e',
			'&:hover': {
				fill: 'white',
				fontSize: '1.8rem',
			},
		},
	},
});

const Footer = () => {
	const classes = useStyles();

	return (
		<BottomNavigation className={classes.bottomNavContainer}>
			<BottomNavigationAction icon={<GitHub />} className={classes.root} />
			<BottomNavigationAction icon={<LinkedIn />} className={classes.root} />
			<BottomNavigationAction icon={<Resume />} className={classes.root} />
		</BottomNavigation>
	);
};
export default Footer;
