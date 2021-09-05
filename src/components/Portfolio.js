import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import Project from './Card';

import project1 from '../images/html-css-javascript-lg.jpg';
import project2 from '../images/html-css-javascript.jpg';
import project3 from '../images/javascript-fullstack.jpg';
import project4 from '../images/mern-stack.jpg';
import project5 from '../images/react-redux.jpg';
import project6 from '../images/react.png';
import insertimageVar from '../images/wcbackground.jpg';

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		background: '#011010',
		height: '100%',
	},
	paperContainer: {
		background: '#011010',
		width: '90%',
		margin: '3rem auto',
		display: 'flex',
		flexDirection: 'column',
	},
	image: {
		width: theme.spacing(75),
		height: theme.spacing(40),
		margin: theme.spacing(1),
		alignSelf: 'center',
	},
	root: {
		position: 'relative',
		overflow: 'hidden',
	},
	indicators: {
		width: '100%',
		marginTop: '10px',
		textAlign: 'center',
	},
	indicator: {
		'cursor': 'pointer',
		'transition': '200ms',
		'padding': 0,
		'color': '#afafaf',
		'&:hover': {
			color: '#1f1f1f',
		},
		'&:active': {
			color: '#1f1f1f',
		},
	},
	indicatorIcon: {
		fontSize: '15px',
	},
	active: {
		color: '#494949',
	},
	buttonWrapper: {
		'position': 'absolute',
		'height': '100px',
		'backgroundColor': 'transparent',
		'top': 'calc(50% - 70px)',
		'&:hover': {
			'& $button': {
				backgroundColor: 'black',
				filter: 'brightness(120%)',
				opacity: '0.4',
			},
		},
	},
	fullHeightHoverWrapper: {
		height: '100%', // This is 100% - indicator height - indicator margin
		top: '0',
	},
	buttonVisible: {
		opacity: '1',
	},
	buttonHidden: {
		opacity: '0',
	},
	button: {
		'margin': '0 10px',
		'position': 'relative',
		'backgroundColor': '#494949',
		'top': 'calc(50% - 20px) !important',
		'color': 'white',
		'fontSize': '30px',
		'transition': '200ms',
		'cursor': 'pointer',
		'&:hover': {
			opacity: '0.6 !important',
		},
	},
	next: {
		right: 0,
	},
	prev: {
		left: 0,
	},
}));

const projects = [
	{
		name: 'Project 1',
		description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
    consequatur magni quod nesciunt necessitatibus molestiae non
    eligendi, magnam est aliquam recusandae? Magnam soluta minus
    iste alias sunt veritatis nisi dolores!`,
		image: project1,
	},
	{
		name: 'Project 2',
		description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
		image: project2,
	},
	{
		name: 'Project 3',
		description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
		image: project3,
	},
	{
		name: 'Project 4',
		description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
		image: project4,
	},
	{
		name: 'Project 5',
		description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
		image: project5,
	},
	{
		name: 'Project 6',
		description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
		image: project6,
	},
	{
		name: 'Project 1: Jeopardy',
		grade: 'A',
		note: '',
		description: `insert description notes here`,
		image: insertimageVar,
		git: 'link',
		url: 'link',
	},
	{
		name: 'Project 2: the event planning',
		grade: 'A',
		note: '',
		description: `insert description notes here`,
		image: insertimageVar,
		git: 'link',
		url: 'link',
	},
	{
		name: 'Project 3: HomeFax',
		grade: 'A+',
		note: '',
		description: `insert description notes here`,
		image: insertimageVar,
		git: 'link',
		url: 'link',
	},
	{
		name: 'Code Refactor',
		grade: 'A-',
		note: `Thank you for submitting your assignment Nicholas! Your application utilizes semantic HTML. The application's image elements all have accessible alt attributes, and all of the application's links function correctly. Nice job commenting on the CSS file, you can also consolidate the css selectors in the aside section. You have a high quality ReadMe with a description, make sure to add a screenshot and a link to the deployed application. Also, you want to commit often to ensure a strong commit history. Keep up the good work!!`,
		description: `insert description notes here`,
		image: insertimageVar,
		git: 'link',
		url: 'link',
	},

	{
		name: 'Professional Portfolio',
		grade: 'A+',
		note: `Nicholas,
		
		Awesome job with this assignment! Love the UI! The only thing I would like to point out is that when the user clicks on the href link (work section) you want to open in a new browser tab by adding target=”_blank” as an attribute. That way user does not leave your page; the goal is to keep them on your website for as long as possible. Otherwise, keep up the good work!
		
		-Central Grader PT`,
		description: `insert description notes here`,
		image: insertimageVar,
		git: 'link',
		url: 'link',
	},

	{
		name: 'Password Generator',
		grade: 'A+',
		note: `Nice work, Nicholas! Your app covers all of the edge cases and questions needed to make a secure password. Your documentation is also well-organized and thorough. Keep it up! -Erin, central grading team`,
		description: `insert description notes here`,
		image: insertimageVar,
		git: 'link',
		url: 'link',
	},

	{
		name: 'Code Quiz',
		grade: ' A+',
		note: `Fantastic job, Nicholas. Your app is well styled with organized code and impressive responsive code utilization. Great use of the modal to display the high score instead of directing the user to a second page. Your readme is impressive; definitely stick with this format. The one observation I have is to consider adding an indicator that the answer chosen is wrong (you could use setInterval to display the word incorrect momentarily) so the user does not have to watch the timer for that indication. Overall, awe-inspiring effort.
		
		-CG, DT`,
		description: `insert description notes here`,
		image: insertimageVar,
		git: 'link',
		url: 'link',
	},

	{
		name: 'Day Planner',
		grade: 'A',
		note: `Great work with this assignment. 1. The UI is great. 2. The dynamic elements are rendered well. 3. The save button creates an entry in the local storage with data and time but the data/text is empty. 4. Since data is empty with the reload the text areas are always empty. However, the functionality of storing and retrieving data from local storage is missing. Please reach out to Tutors/Slack/Instructional staff for any help needed. You may resubmit this assignment for a better grade. Keep up the hard work and stay motivated!`,
		description: `insert description notes here`,
		image: insertimageVar,
		git: 'link',
		url: 'link',
	},

	{
		name: 'Weather Dashboard',
		grade: 'A',
		note: `Hey Nicholas! Great job on this assignment! This assignment is really tricky, especially with local storage but you did great! Your code and your commit history are awesome! All in all this great job! Keep up the good work!`,
		description: `insert description notes here`,
		image: insertimageVar,
		git: 'link',
		url: 'link',
	},

	{
		name: 'Updated Portfolio Page',
		grade: 'A-',
		note: `Great job on the assignment! Your page contains all of the required projects, resume, and contact information, and has a mobile responsive design. While your Github profile is up to date, your LinkedIn lacks a strong bio statement, professional photo, and links to your GitHub profile and deployed portfolio. This is a really strong effort...well done!`,
		description: `insert description notes here`,
		image: insertimageVar,
		git: 'link',
		url: 'link',
	},

	{
		name: 'Good README Generator',
		grade: 'A+',
		note: `Hi Nicholas,
		
		Great work on this assignment! Your walkthrough video showcased the requirements of this assignment!
		
		As you already know, you can use this app for all of your future READMEs. Continue to revisit this application as you learn throughout this course to have a well designed README to your professional (and fun) liking! For example the template you've created is heavily geared towards this README challenge. If you make it more generic/customizable, you can use this generator for all future READMEs without having to heavily edit it.
		
		Here's a resource for more Markdown information: https://www.markdownguide.org/cheat-sheet/
		
		Keep up the good work! -Central Grader KW`,
		description: `insert description notes here`,
		image: insertimageVar,
		git: 'link',
		url: 'link',
	},

	{
		name: 'Team Profile Generator',
		grade: 'A',
		note: `Hi Nicholas, nice work on your team profile app! I was able to create a profile for my fictional team, and overall everything worked without issue. Very impressive work Nicholas!! --Central Grader RC`,
		description: `insert description notes here`,
		image: insertimageVar,
		git: 'link',
		url: 'link',
	},

	{
		name: 'Note Taker',
		grade: 'A+',
		note: `Awesome job, Nicholas! You deployed your application on Heroku and it functions just right. The application backend stores note in JSON file and also connects the frontend to the backend. The application allows users to create and save persistent notes, view previously saved notes, and deletes them. The application user experience is intuitive and easy to navigate. The application console is also free of errors. You also did a fantastic job creating a well-descriptive high quality README with the deployed application link and screenshots displaying application functionalities. Keep up the awesome job! Thank you.`,
		description: `insert description notes here`,
		image: insertimageVar,
		git: 'link',
		url: 'link',
	},

	{
		name: 'Employee Management System',
		grade: 'A+',
		note: `Thank you for submitting your assignment Nicholas! Your application allows the user to add departments, roles, and employees along with viewing them. Additionally, the video demonstrates the update employee feature, and features from the bonus section. Good use of the table schema as outlined in the homework instructions. You have a quality ReadMe with a description, screenshots, and a link to the demonstration video. Nice job including the warning message if an employee should not be removed or an action has already been taken. Good job! Keep up the good work!`,
		description: `insert description notes here`,
		image: insertimageVar,
		git: 'link',
		url: 'link',
	},

	{
		name: 'E-Commerce Back End',
		grade: 'A',
		note: `Hi Nicholas,
		
		Great job on this assignment! Getting all of the routes built for an e-commerce website can be tricky. I tested your repo locally and your routes worked per the requirements!
		
		My only feedback is that your last two association models in models/index.js are missing the foreignKey restraint. Because they are linking through ProductTag.js model, you need to bind the Product/Tag to their respective 'X_id' property in ProductTag.js.
		
		Your repo has good descriptive commits and a quality README.
		
		Keep up the good work! -Central Grader KW`,
		description: `insert description notes here`,
		image: insertimageVar,
		git: 'link',
		url: 'link',
	},

	{
		name: 'Tech Blog',
		grade: 'A+',
		note: `Excellent job here Nicholas! Your app allows a user to signup/login/logout, the homepage displays all posts along with their title/content/author/date of creation, clicking a post displays its comments and allows you to write your own if you are loggedin, the dashboard displays your posts, and you are able to create/edit/delete posts. Everything looks good and works perfectly; keep up the great work!`,
		description: `insert description notes here`,
		image: insertimageVar,
		git: 'link',
		url: 'link',
	},

	{
		name: 'Updated Portfolio Page #2',
		grade: 'A+',
		note: `Great job updating your portfolio and meeting the requirements of this assignment. I have bypassed the LinkedIn part of this homework due to your explanation.`,
		description: `insert description notes here`,
		image: insertimageVar,
		git: 'link',
		url: 'link',
	},

	{
		name: 'Regex Tutorial',
		grade: 'B+',
		note: `Very good work on the Regex Tutorial, Nicholas. The overall flow of the tutorial worked quite well. Keep up with the formatting as it was clean and easy to read. It looked really good. Some things to improve would be to make sure your read the acceptance criteria as some of your sections contained one-sentence explanations which it said to use more than one.
		
		Otherwise, this was a stupendous effort. Keep up the momentum all the way to the finish line!
		
		Central Grader - JWP`,
		description: `insert description notes here`,
		image: insertimageVar,
		git: 'link',
		url: 'link',
	},

	{
		name: 'Fitness Tracker',
		grade: 'A+',
		note: `Amazing job Nicholas! Everything is working perfectly. The only thing I would recommend improving is having a more unique repository name. Your commit are solid, but always make sure you're being descriptive in every commit you make describing the what and also the why. Keep up the great work!`,
		description: `insert description notes here`,
		image: insertimageVar,
		git: 'link',
		url: 'link',
	},

	{
		name: 'Progressive Budget',
		grade: 'A+',
		note: `Hello Nicholas,
		
		Great job on this assignment. It functions perfectly and the repository looks really professional. Please keep up the fantastic work!
		
		Thank you, Central Grader, DM`,
		description: `insert description notes here`,
		image: insertimageVar,
		git: 'link',
		url: 'link',
	},

	{
		name: 'React Portfolio',
		grade: 'A+',
		note: `Hello Nicholas,
		
		Great job on your portfolio. It functions perfectly and looks really professional. Please keep up the fantastic work!
		
		Thank you, Central Grader, DM`,
		description: `insert description notes here`,
		image: insertimageVar,
		git: 'link',
		url: 'link',
	},

	{
		name: 'Book Search Engine',
		grade: 'A+',
		note: `Hello Nicholas,
		
		Nice work on this difficult assignment.
		DEPLOYMENT: Both links were submitted and work well, with no errors.
		TECHNICAL CRITERIA: Your app uses REACT and Express routes. The app shows the title, author, description, and image fields and the link to the searched book. No errors appear.
		REPOSITORY QUALITY: The app uses best practices for file structure, naming conventions, and variable and function naming conventions. Nice descriptive comments. Commit history is frequent and descriptive. Your README is detailed with descriptions, screenshots, and links.
		APPLICATION QUALITY: Very good UI and UX and easy to navigate.
		
		Thank you,
		Central Grader, DM`,
		description: `insert description notes here`,
		image: insertimageVar,
		git: 'link',
		url: 'link',
	},

	{
		name: `Redux Store`,
		grade: 'A',
		note: `Hi Nicholas, everything looks good with the deployment. I also looked through your code there and it looks like Redux was set up correctly to work with the store. I would suggest that you also add this npm package redux-devtools-extension to your app, import it where you create the store and pass it as a parameter (middleware) in the createStore() method. With this you should be able to debug any issues with redux in the dev tools for the browser. I was able to see that your app runs just as before in Heroku but now using Redux, well done. Thank you for the great readme and documentation of the changes made, this really goes a long way. I hope that this assignments provides extra insight about state management and its intricacies. Keep up the hard work.`,
		description: `insert description notes here`,
		image: insertimageVar,
		git: 'link',
		url: 'link',
	},
];

const Portfolio = () => {
	const classes = useStyles();
	return (
		<Box component='div' className={classes.mainContainer}>
			<Grid container justify='center'>
				{/*Projects */}
				{projects.map((project, i) => (
					<Project key={i} project={project} />

					// <Grid item xs={12} sm={8} md={4} key={i}>
					//   <Card className={classes.cardContainer}>
					// 	<CardActionArea>
					// 	  <CardMedia
					// 		component="img"
					// 		alt="Project 1"
					// 		height="140"
					// 		image={project.image}
					// 	  />
					// 	  <CardContent>
					// 		<Typography variant="h5" gutterBottom>
					// 		  {project.name}
					// 		</Typography>
					// 		<Typography variant="body2" color="textSecondary">
					// 		  {project.description}
					// 		</Typography>
					// 	  </CardContent>
					// 	</CardActionArea>
					// 	<CardActions>
					// 	  <Button size="small" color="primary">
					// 		Share
					// 	  </Button>
					// 	  <Button size="small" color="primary">
					// 		Live Demo
					// 	  </Button>
					// 	</CardActions>
					//   </Card>
					// </Grid>	*/}
				))}
			</Grid>
		</Box>
	);
};

export default Portfolio;
