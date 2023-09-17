import CardProject from '../CardProject/CardProject'

export default function MyProjects() {
	const projects = [
		{
			image_url: 'corrida.png',
			name: 'Corrida dos DEVs',
			repo_url: 'https://github.com/jpclrocha/corrida-dos-devs',
			description:
				'Corrida dos DEVs is a web app that was made to help beginners practice programming with weekly challenges. If the users respond to them correctly, the challenges give them an amount of points to compete in the rank.',
			homepage: '',
			stack: ['JavaScript', 'React', 'Sass'],
			type: 'inverted',
		},
		{
			image_url: 'construcao.jpg',
			name: 'Pong Clash',
			repo_url: 'https://github.com/jpclrocha/pong-clash-backend',
			description:
				'Manage your Table Tennis team and organize tournaments in a simple way.',
			homepage: '',
			stack: ['Java', 'React', 'TailwindCSS'],
			type: 'normal',
		},
		{
			image_url: 'hex-color.png',
			name: 'Hex Color',
			repo_url: 'https://github.com/jpclrocha/hex-color',
			description:
				'This project is a simple website where you can generate a random color and copy its hex code to your clipboard.',
			homepage: 'https://jpclrocha.github.io/hex-color/',
			stack: ['JavaScript', 'Css'],
			type: 'inverted',
		},
	]

	return (
		<div className='flex flex-wrap w-full h-fit p-10' id='projects'>
			<h1 className='w-fit h-fit text-4xl mb-10'>My projects</h1>

			<div className='flex flex-wrap w-full h-fit'>
				{projects.map((item) => (
					<CardProject {...item} key={item.name} />
				))}
			</div>
		</div>
	)
}
