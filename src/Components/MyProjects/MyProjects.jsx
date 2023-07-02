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
			type: 'normal',
		},
		{
			image_url: 'corrida.png',
			name: 'Corrida dos DEVs',
			repo_url: 'https://github.com/jpclrocha/corrida-dos-devs',
			description:
				'Corrida dos DEVs is a web app that was made to help beginners practice programming with weekly challenges. If the users respond to them correctly, the challenges give them many points to compete in the rank. The website also has support material, so the users can see some concepts and apply them on the challenges.',
			homepage: '',
			stack: ['JavaScript', 'React', 'TailwindCSS'],
			type: 'inverted',
		},
		{
			image_url: 'corrida.png',
			name: 'Corrida dos DEVs',
			repo_url: 'https://github.com/jpclrocha/corrida-dos-devs',
			description:
				'Corrida dos DEVs is a web app that was made to help beginners practice programming with weekly challenges. If the users respond to them correctly, the challenges give them many points to compete in the rank. The website also has support material, so the users can see some concepts and apply them on the challenges.',
			homepage: '',
			stack: ['JavaScript', 'React', 'TailwindCSS'],
			type: 'normal',
		},
	]

	return (
		<div className='flex flex-wrap w-full h-fit p-10' id='projects'>
			<h1 className='w-[30vw] h-fit text-4xl mb-10'>My projects</h1>

			<div className='flex flex-wrap w-full h-fit'>
				{projects.map((item) => (
					<CardProject {...item} key={item.name} />
				))}
			</div>
		</div>
	)
}
