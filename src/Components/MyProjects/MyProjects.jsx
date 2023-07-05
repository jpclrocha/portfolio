import CardProject from '../CardProject/CardProject'

export default function MyProjects() {
	const projects = [
		{
			image_url: 'corrida.png',
			name: 'Corrida dos DEVs',
			repo_url: 'https://github.com/jpclrocha/corrida-dos-devs',
			description:
				'Corrida dos DEVs is a web app that was made to help beginners practice programming with weekly challenges. If the users respond to them correctly, the challenges give them many points to compete in the rank. The website also has support material, so the users can see some concepts and apply them on the challenges.',
			homepage: '',
			stack: ['JavaScript', 'React', 'Sass'],
			type: 'inverted',
		},
		{
			image_url: 'hex-color.png',
			name: 'Hex Color',
			repo_url: 'https://github.com/jpclrocha/hex-color',
			description:
				'This project is a simple website where you can generate a random color and copy its hex code to your clipboard.',
			homepage: 'https://jpclrocha.github.io/hex-color/',
			stack: ['JavaScript', 'Css'],
			type: 'normal',
		},
		{
			image_url: 'quebra-cabeca.png',
			name: 'Quebra Cabeça',
			repo_url: 'https://github.com/jpclrocha/quebracabeca',
			description:
				'This project is a simple web game where you have to put the numbers in order and the last square has to be the blank one. Looks easy, right?',
			homepage: 'https://jpclrocha.github.io/quebracabeca/',
			stack: ['JavaScript', 'Bootstrap'],
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
