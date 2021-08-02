import React from 'react';
import Card from './Card';
import jeopardyimage from '../images/jeopardy.jpg';
import eventimage from '../images/eventplanning.jpg';
import weatherimage from '../images/weatherdash.jpg';

const projectArr = [
	{
		name: 'Jeopardy!',
		link: 'https://brownnicholasj.github.io/jeopardy-game/',
		image: jeopardyimage,
		git: 'https://github.com/brownnicholasj/jeopardy-game',
	},
	{
		name: 'The Event Planning',
		link: 'https://the-event-planning.herokuapp.com/',
		image: eventimage,
		git: 'https://github.com/brownnicholasj/the-event-planning',
	},
	{
		name: 'Weather Dashboard',
		link: 'https://brownnicholasj.github.io/weather_dashboard/',
		image: weatherimage,
		git: 'https://github.com/brownnicholasj/weather_dashboard',
	},
];

export default function Work() {
	return (
		<section>
			<h2>work section</h2>
			{projectArr.map((value, index) => (
				<Card
					name={value.name}
					link={value.link}
					image={value.image}
					git={value.git}
					key={index}
				/>
			))}
		</section>
	);
}
