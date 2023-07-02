import CardProject from '../CardProject/CardProject'

export default function MyProjects() {
	const projects = [
		{
			image_url: '',
			name: 'teste',
			html_url: 'https://youtube.com',
			description: 'teste',
			homepage: 'https://youtube.com',
			stack: ['Java', 'HTML', 'CSS'],
		},
		{
			image_url: '',
			name: 'teste',
			html_url: 'https://youtube.com',
			description: 'teste',
			homepage: 'https://youtube.com',
			stack: ['Java', 'HTML', 'CSS'],
		},
		{
			image_url: '',
			name: 'teste',
			html_url: 'https://youtube.com',
			description: 'teste',
			homepage: 'https://youtube.com',
			stack: ['Java', 'HTML', 'CSS'],
		},
		{
			image_url: '',
			name: 'teste',
			html_url: 'https://youtube.com',
			description: 'teste',
			homepage: 'https://youtube.com',
			stack: ['Java', 'HTML', 'CSS'],
		},
		{
			image_url: '',
			name: 'teste',
			html_url: 'https://youtube.com',
			description: 'teste',
			homepage: 'https://youtube.com',
			stack: ['Java', 'HTML', 'CSS'],
		},
		{
			image_url: '',
			name: 'teste',
			html_url: 'https://youtube.com',
			description: 'teste',
			homepage: 'https://youtube.com',
			stack: ['Java', 'HTML', 'CSS'],
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
