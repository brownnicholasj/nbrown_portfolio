import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import ArrowBack from '@material-ui/icons/ArrowBack';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import Home from '@material-ui/icons/Home';
import Apps from '@material-ui/icons/Apps';
import ContactMail from '@material-ui/icons/ContactMail';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../logo.png';

import Footer from '../components/Footer';

const useStyles = makeStyles((theme) => ({
	appbar: {
		background: '#011010',
		margin: 0,
	},
	arrow: {
		color: 'white',
	},
	title: {
		color: '#9e9e9e',
	},
	menuSliderContainer: {
		width: 250,
		background: '#212121',
		height: '100%',
	},
	logo: {
		display: 'block',
		margin: '0.5rem auto',
		width: theme.spacing(13),
		height: theme.spacing(13),
	},
	listItem: {
		color: '#9e9e9e',
	},
}));

const menuItems = [
	{ listIcon: <Home />, listText: 'Home', listPath: '/nbrown_portfolio' },
	{
		listIcon: <AssignmentInd />,
		listText: 'Experience',
		listPath: '/nbrown_portfolio/experience',
	},
	{
		listIcon: <Apps />,
		listText: 'Portfolio',
		listPath: '/nbrown_portfolio/portfolio',
	},
	{
		listIcon: <ContactMail />,
		listText: 'Contact',
		listPath: '/nbrown_portfolio/contact',
	},
];

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const classes = useStyles();

	const sideList = () => (
		<Box className={classes.menuSliderContainer} component='div'>
			<Avatar className={classes.logo} src={logo} alt='NBrown logo' />
			<Divider />
			<List>
				{menuItems.map((item, i) => (
					<ListItem
						button
						key={i}
						className={classes.listItem}
						onClick={() => setOpen(false)}
						component={Link}
						to={item.listPath}
					>
						<ListItemIcon className={classes.listItem}>
							{item.listIcon}
						</ListItemIcon>
						<ListItemText primary={item.listText} />
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<React.Fragment>
			<Box component='nav'>
				<AppBar position='static' className={classes.appbar}>
					<Toolbar>
						<IconButton onClick={() => setOpen(true)}>
							<ArrowBack className={classes.arrow} />
						</IconButton>
						<Typography variant='h5' className={classes.title}>
							Portfolio
						</Typography>
					</Toolbar>
				</AppBar>
			</Box>
			<Drawer open={open} anchor='left' onClose={() => setOpen(false)}>
				{sideList()}
				<Footer />
			</Drawer>
		</React.Fragment>
	);
};

export default Navbar;
