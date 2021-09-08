import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import GradeCard from './GradeCard';

const useStyles = makeStyles((theme) => ({
	cardContainer: {
		'background': '#212121',
		'maxWidth': '20%',
		'minWidth': 345,
		'margin': theme.spacing(10),
		'&:hover': {
			borderRadius: 3,
			boxShadow: '0 0 15px 8px #fff' /* inner white */,
		},
	},
	cardContainerisHover: {
		background: '#212121',
		maxWidth: '20%',
		minWidth: 345,
		margin: theme.spacing(10),
	},
	image: {
		width: theme.spacing(75),
		height: theme.spacing(40),
		margin: theme.spacing(0),
		alignSelf: 'center',
	},
	header: {
		color: '#9e9e9e',
	},
	paragraph: {
		color: 'tan',
	},
	buttonContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		alignSelf: 'flex-end',
	},
	button: {
		'background': 'linear-gradient(45deg, rgb(56,56,56) 30%, rgb(0,0,0) 90%)',
		'border': 0,
		'borderRadius': 3,
		'boxShadow': '0 3px 5px 2px rgba(255, 105, 135, .3)',
		'color': 'white',
		'height': 48,
		'padding': '0 30px',
		'&:hover': {
			borderRadius: 3,
			boxShadow: '0 0 5px 2px #fff' /* inner white */,
		},
	},
}));

function Project(props) {
	const classes = useStyles();

	return (
		<Card className={classes.cardContainer}>
			<CardActionArea>
				<CardMedia
					className={classes.image}
					component='img'
					alt={props.project.name}
					height='240'
					image={props.project.image}
				/>
				<CardContent>
					<Typography className={classes.header} variant='h5' gutterBottom>
						{props.project.name}
					</Typography>
					<Typography className={classes.paragraph} variant='body2'>
						{props.project.description}
					</Typography>
				</CardContent>
			</CardActionArea>

			<CardActions className={classes.buttonContainer}>
				<Button
					size='small'
					className={classes.button}
					onClick={() => window.open(`${props.project.git}`, '_blank')}
				>
					Git Repo
				</Button>
				<Button
					size='small'
					className={classes.button}
					onClick={() => window.open(`${props.project.url}`, '_blank')}
				>
					Live Demo
				</Button>
			</CardActions>
		</Card>
	);
}
export default Project;
