import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		background: '#011010',
	},
	timeLine: {
		'position': 'relative',
		'padding': '1rem',
		'margin': 'o auto',
		'&:before': {
			content: "''",
			position: 'absolute',
			height: '100%',
			border: '1px solid tan',
			right: '40px',
			top: 0,
		},
		'&:after': {
			content: "''",
			display: 'table',
			clear: 'both',
		},
		[theme.breakpoints.up('md')]: {
			'padding': '2rem',
			'&:before': {
				left: 'calc(50% - 1px)',
				right: 'auto',
			},
		},
	},
	timeLineItem: {
		'padding': '1rem',
		'borderBottom': '2px solid tan',
		'position': 'relative',
		'margin': '1rem 3rem 1rem 1rem',
		'clear': 'both',
		'&:after': {
			content: "''",
			position: 'absolute',
		},
		'&:before': {
			content: "''",
			position: 'absolute',
			right: '-0.625rem',
			top: 'calc(50% - 5px)',
			borderStyle: 'solid',
			borderColor: 'DarkRed DarkRed transparent transparent',
			borderWidth: '0.625rem',
			transform: 'rotate(45deg)',
		},
		[theme.breakpoints.up('md')]: {
			'width': '44%',
			'margin': '1rem',
			'&:nth-of-type(2n)': {
				float: 'right',
				margin: '1rem',
				borderColor: 'tan',
			},
			'&:nth-of-type(2n):before': {
				right: 'auto',
				left: '-0.625rem',
				borderColor: 'transparent transparent DarkRed DarkRed',
			},
		},
	},
	timeLineYear: {
		'textAlign': 'center',
		'maxWidth': '9.375rem',
		'margin': '0 3rem 0 auto',
		'fontSize': '1.8rem',
		'color': '#9e9e9e',
		'background': 'DarkRed',
		'lineHeight': 1,
		'padding': '0.5rem 1rem',
		'&:before': {
			display: 'none',
		},
		[theme.breakpoints.up('md')]: {
			'textAlign': 'center',
			'margin': '0 auto',
			'&:nth-of-type(2n)': {
				float: 'none',
				margin: '0 auto',
			},
			'&:nth-of-type(2n):before': {
				display: 'none',
			},
		},
	},
	heading: {
		color: 'DarkRed',
		padding: '3rem 0',
		textTransform: 'uppercase',
	},
	subHeading: {
		color: '#9e9e9e',
		padding: 0,
		textTransform: 'uppercase',
	},
	body1: {
		color: 'DarkRed',
	},
	subtitle1: {
		color: 'tan',
	},
}));

const Resume = () => {
	const classes = useStyles();
	return (
		<Box component='header' className={classes.mainContainer}>
			<Typography variant='h4' align='center' className={classes.heading}>
				Working Experience
			</Typography>
			<Box component='div' className={classes.timeLine}>
				<Typography
					variant='h2'
					className={`${classes.timeLineYear} ${classes.timeLineItem}`}
				>
					2008
				</Typography>
				<Box component='div' className={classes.timeLineItem}>
					<Typography
						variant='h5'
						align='center'
						className={classes.subHeading}
					>
						Transportation Analyst
					</Typography>
					<Typography variant='body1' align='center' className={classes.body1}>
						Reckitt Benckiser
					</Typography>
					<Typography
						variant='subtitle1'
						align='center'
						className={classes.subtitle1}
					>
						Operations and analytical support within the transportation
						department managing $100+ million operations budget.
					</Typography>
				</Box>
				<Typography
					variant='h2'
					className={`${classes.timeLineYear} ${classes.timeLineItem}`}
				>
					2011
				</Typography>
				<Box component='div' className={classes.timeLineItem}>
					<Typography
						variant='h5'
						align='center'
						className={classes.subHeading}
					>
						Transportation Procurement Manager
					</Typography>
					<Typography variant='body1' align='center' className={classes.body1}>
						Ralcorp (Purchased by ConAgra)
					</Typography>
					<Typography
						variant='subtitle1'
						align='center'
						className={classes.subtitle1}
					>
						Transportation Management System super user that utilizes online
						SaaS system to manage and execute transportation operations.
					</Typography>
				</Box>
				<Typography
					variant='h2'
					className={`${classes.timeLineYear} ${classes.timeLineItem}`}
				>
					2013
				</Typography>
				<Box component='div' className={classes.timeLineItem}>
					<Typography
						variant='h5'
						align='center'
						className={classes.subHeading}
					>
						Demand Planning Manager
					</Typography>
					<Typography variant='body1' align='center' className={classes.body1}>
						Russell Stovers Candies
					</Typography>
					<Typography
						variant='subtitle1'
						align='center'
						className={classes.subtitle1}
					>
						Lead a team of Demand Planners to forecast and provide directional
						support to operations departments in a highly volatile holiday candy
						industry.
					</Typography>
				</Box>
				<Typography
					variant='h2'
					className={`${classes.timeLineYear} ${classes.timeLineItem}`}
				>
					2015
				</Typography>
				<Box component='div' className={classes.timeLineItem}>
					<Typography
						variant='h5'
						align='center'
						className={classes.subHeading}
					>
						Professional Services Manager
					</Typography>
					<Typography variant='body1' align='center' className={classes.body1}>
						MercuryGate International
					</Typography>
					<Typography
						variant='subtitle1'
						align='center'
						className={classes.subtitle1}
					>
						Manage team of optimization specialists to deliver creative
						solutions within the TMS product suite focused around Optimization
						and automation.
					</Typography>
				</Box>

				<Typography
					variant='h2'
					className={`${classes.timeLineYear} ${classes.timeLineItem}`}
				>
					2021
				</Typography>
				<Box component='div' className={classes.timeLineItem}>
					<Typography
						variant='h5'
						align='center'
						className={classes.subHeading}
					>
						Product Manager
					</Typography>
					<Typography variant='body1' align='center' className={classes.body1}>
						MercuryGate International
					</Typography>
					<Typography
						variant='subtitle1'
						align='center'
						className={classes.subtitle1}
					>
						Create and manage user stories and acceptance criteria for new
						development efforts across the product offering. Provide support and
						decision making for development teams to achieve new functionality
						and features for the product.
					</Typography>
				</Box>
				<Box component='div' className={classes.timeLineItem}>
					<Typography
						variant='h5'
						align='center'
						className={classes.subHeading}
					>
						Full Stack Development Certification
					</Typography>
					<Typography variant='body1' align='center' className={classes.body1}>
						University of Kansas
					</Typography>
					<Typography
						variant='subtitle1'
						align='center'
						className={classes.subtitle1}
					>
						Full stack development bootcamp that focused on a foundation of
						HTML, CSS and JavaScript. Then expanded my skills necessary to
						engineer a full stack web application, working with servers,
						databases, and other back end technologies, and connecting them to
						the front end. We then focused on optimizing web applications for
						speed and efficiency with common practices in web development.
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default Resume;
