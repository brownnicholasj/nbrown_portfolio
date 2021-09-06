import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import Project from './Card';

import jeopardy from '../images/jeopardy.jpg';
import eventplanning from '../images/eventplanning.jpg';
import homefax from '../images/homefax.jpg';
import refactoring from '../images/refactoring.jpg';
import portfolio from '../images/portfolio.jpg';
import redux from '../images/react-redux.jpg';
import booksearch from '../images/booksearch.jpg';
import code_quiz from '../images/code_quiz.jpg';
import dayplanner from '../images/dayplanner.jpg';
import weatherdash from '../images/weatherdash.jpg';
import techblog from '../images/techblog.jpg';
import fitness from '../images/fitness.jpg';
import readme from '../images/readme.jpg';
import teamprofile from '../images/teamprofile.jpg';
import notetaker from '../images/notetaker.jpg';
import ems from '../images/ems.jpg';
import ecommbe from '../images/ecommbe.jpg';
import regex from '../images/regex.jpg';
import password from '../images/password.jpg';
import budget from '../images/budget.jpg';

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		background: '#011010',
		height: '100%',
	},
}));

const projects = [
	{
		name: 'Project 1: Jeopardy',
		grade: 'A',
		note: '',
		description: `insert description notes here`,
		image: jeopardy,
		git: 'https://github.com/brownnicholasj/jeopardy-game',
		url: 'https://btdubbzzz.github.io/jeopardy-game/',
	},
	{
		name: 'Project 2: the event planning',
		grade: 'A',
		note: '',
		description: `insert description notes here`,
		image: eventplanning,
		git: 'https://github.com/brownnicholasj/the-event-planning',
		url: 'https://the-event-planning.herokuapp.com/',
	},
	{
		name: 'Project 3: HomeFax',
		grade: 'A+',
		note: '',
		description: `insert description notes here`,
		image: homefax,
		git: 'https://github.com/brownnicholasj/homeFax',
		url: 'https://homefax.herokuapp.com/',
	},
	{
		name: 'Professional Portfolio',
		grade: 'A+',
		note: `Hello Nicholas,
		
		Great job on your portfolio. It functions perfectly and looks really professional. Please keep up the fantastic work!
		
		Thank you, Central Grader, DM`,
		description: `insert description notes here`,
		image: portfolio,
		git: 'https://github.com/brownnicholasj/nbrown_portfolio',
		url: 'https://brownnicholasj.github.io/nbrown_portfolio/',
	},
	{
		name: `Redux Store`,
		grade: 'A',
		note: `Hi Nicholas, everything looks good with the deployment. I also looked through your code there and it looks like Redux was set up correctly to work with the store. I would suggest that you also add this npm package redux-devtools-extension to your app, import it where you create the store and pass it as a parameter (middleware) in the createStore() method. With this you should be able to debug any issues with redux in the dev tools for the browser. I was able to see that your app runs just as before in Heroku but now using Redux, well done. Thank you for the great readme and documentation of the changes made, this really goes a long way. I hope that this assignments provides extra insight about state management and its intricacies. Keep up the hard work.`,
		description: `insert description notes here`,
		image: redux,
		git: 'https://github.com/brownnicholasj/ecommRedux',
		url: 'https://brownnicholasj-redux-ecomm.herokuapp.com/',
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
		image: booksearch,
		git: 'https://github.com/brownnicholasj/bookSearch',
		url: 'https://brownnicholasj-booksearch.herokuapp.com/',
	},
	{
		name: 'Code Quiz',
		grade: ' A+',
		note: `Fantastic job, Nicholas. Your app is well styled with organized code and impressive responsive code utilization. Great use of the modal to display the high score instead of directing the user to a second page. Your readme is impressive; definitely stick with this format. The one observation I have is to consider adding an indicator that the answer chosen is wrong (you could use setInterval to display the word incorrect momentarily) so the user does not have to watch the timer for that indication. Overall, awe-inspiring effort.
		
		-CG, DT`,
		description: `insert description notes here`,
		image: code_quiz,
		git: 'https://github.com/brownnicholasj/code_quiz',
		url: 'https://brownnicholasj.github.io/code_quiz/',
	},
	{
		name: 'Day Planner',
		grade: 'A',
		note: `Great work with this assignment. 1. The UI is great. 2. The dynamic elements are rendered well. 3. The save button creates an entry in the local storage with data and time but the data/text is empty. 4. Since data is empty with the reload the text areas are always empty. However, the functionality of storing and retrieving data from local storage is missing. Please reach out to Tutors/Slack/Instructional staff for any help needed. You may resubmit this assignment for a better grade. Keep up the hard work and stay motivated!`,
		description: `insert description notes here`,
		image: dayplanner,
		git: 'https://github.com/brownnicholasj/day_planner',
		url: 'https://brownnicholasj.github.io/day_planner/',
	},
	{
		name: 'Weather Dashboard',
		grade: 'A',
		note: `Hey Nicholas! Great job on this assignment! This assignment is really tricky, especially with local storage but you did great! Your code and your commit history are awesome! All in all this great job! Keep up the good work!`,
		description: `insert description notes here`,
		image: weatherdash,
		git: 'https://github.com/brownnicholasj/weather_dashboard',
		url: 'https://brownnicholasj.github.io/weather_dashboard/',
	},
	{
		name: 'Tech Blog',
		grade: 'A+',
		note: `Excellent job here Nicholas! Your app allows a user to signup/login/logout, the homepage displays all posts along with their title/content/author/date of creation, clicking a post displays its comments and allows you to write your own if you are loggedin, the dashboard displays your posts, and you are able to create/edit/delete posts. Everything looks good and works perfectly; keep up the great work!`,
		description: `insert description notes here`,
		image: techblog,
		git: 'https://github.com/brownnicholasj/tech_blog',
		url: 'https://brownnicholasj-techblog.herokuapp.com/',
	},
	{
		name: 'Fitness Tracker',
		grade: 'A+',
		note: `Amazing job Nicholas! Everything is working perfectly. The only thing I would recommend improving is having a more unique repository name. Your commit are solid, but always make sure you're being descriptive in every commit you make describing the what and also the why. Keep up the great work!`,
		description: `insert description notes here`,
		image: fitness,
		git: 'https://github.com/brownnicholasj/workout_tracker',
		url: 'https://brownnicholasj-workout-tracker.herokuapp.com/',
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
		image: readme,
		git: 'https://github.com/brownnicholasj/readme_generator',
		url: 'https://github.com/brownnicholasj/readme_generator#readme',
	},
	{
		name: 'Team Profile Generator',
		grade: 'A',
		note: `Hi Nicholas, nice work on your team profile app! I was able to create a profile for my fictional team, and overall everything worked without issue. Very impressive work Nicholas!! --Central Grader RC`,
		description: `insert description notes here`,
		image: teamprofile,
		git: 'https://github.com/brownnicholasj/team_profile',
		url: 'https://github.com/brownnicholasj/team_profile#readme',
	},
	{
		name: 'Note Taker',
		grade: 'A+',
		note: `Awesome job, Nicholas! You deployed your application on Heroku and it functions just right. The application backend stores note in JSON file and also connects the frontend to the backend. The application allows users to create and save persistent notes, view previously saved notes, and deletes them. The application user experience is intuitive and easy to navigate. The application console is also free of errors. You also did a fantastic job creating a well-descriptive high quality README with the deployed application link and screenshots displaying application functionalities. Keep up the awesome job! Thank you.`,
		description: `insert description notes here`,
		image: notetaker,
		git: 'https://github.com/brownnicholasj/note_taker',
		url: 'https://github.com/brownnicholasj/note_taker#readme',
	},
	{
		name: 'Employee Management System',
		grade: 'A+',
		note: `Thank you for submitting your assignment Nicholas! Your application allows the user to add departments, roles, and employees along with viewing them. Additionally, the video demonstrates the update employee feature, and features from the bonus section. Good use of the table schema as outlined in the homework instructions. You have a quality ReadMe with a description, screenshots, and a link to the demonstration video. Nice job including the warning message if an employee should not be removed or an action has already been taken. Good job! Keep up the good work!`,
		description: `insert description notes here`,
		image: ems,
		git: 'https://github.com/brownnicholasj/company_roster',
		url: 'https://github.com/brownnicholasj/company_roster#readme',
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
		image: ecommbe,
		git: 'https://github.com/brownnicholasj/e_comm_backend',
		url: 'https://github.com/brownnicholasj/e_comm_backend#readme',
	},
	{
		name: 'Regex Tutorial',
		grade: 'B+',
		note: `Very good work on the Regex Tutorial, Nicholas. The overall flow of the tutorial worked quite well. Keep up with the formatting as it was clean and easy to read. It looked really good. Some things to improve would be to make sure your read the acceptance criteria as some of your sections contained one-sentence explanations which it said to use more than one.
		
		Otherwise, this was a stupendous effort. Keep up the momentum all the way to the finish line!
		
		Central Grader - JWP`,
		description: `insert description notes here`,
		image: regex,
		git: 'https://gist.github.com/brownnicholasj/3297cd88b09391ccb64a38d2b8debc2a',
		url: 'https://gist.github.com/brownnicholasj/3297cd88b09391ccb64a38d2b8debc2a',
	},
	{
		name: 'Progressive Budget',
		grade: 'A+',
		note: `Hello Nicholas,
		
		Great job on this assignment. It functions perfectly and the repository looks really professional. Please keep up the fantastic work!
		
		Thank you, Central Grader, DM`,
		description: `insert description notes here`,
		image: budget,
		git: 'https://github.com/brownnicholasj/budgettrackeroffline',
		url: 'https://brownnicholasj-budget-tracker.herokuapp.com/',
	},
	{
		name: 'Password Generator',
		grade: 'A+',
		note: `Nice work, Nicholas! Your app covers all of the edge cases and questions needed to make a secure password. Your documentation is also well-organized and thorough. Keep it up! -Erin, central grading team`,
		description: `insert description notes here`,
		image: password,
		git: 'https://github.com/brownnicholasj/gen_password',
		url: 'https://github.com/brownnicholasj/gen_password#readme',
	},
	{
		name: 'Code Refactor',
		grade: 'A-',
		note: `Thank you for submitting your assignment Nicholas! Your application utilizes semantic HTML. The application's image elements all have accessible alt attributes, and all of the application's links function correctly. Nice job commenting on the CSS file, you can also consolidate the css selectors in the aside section. You have a high quality ReadMe with a description, make sure to add a screenshot and a link to the deployed application. Also, you want to commit often to ensure a strong commit history. Keep up the good work!!`,
		description: `insert description notes here`,
		image: refactoring,
		git: 'https://github.com/brownnicholasj/horiseon_agency',
		url: 'https://github.com/brownnicholasj/horiseon_agency#readme',
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
