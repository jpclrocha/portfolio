import {
	AiOutlineGithub,
	AiOutlineInstagram,
	AiOutlineLinkedin,
	AiOutlineMail,
	AiOutlineTwitter,
	AiOutlineWhatsApp,
} from 'react-icons/ai'

export default function Contact() {
	const social = [
		{
			name: 'Linkedin',
			icon: <AiOutlineLinkedin size={'32px'} />,
			url: 'https://www.linkedin.com/in/jpclrocha/',
		},
		{
			name: 'GitHub',
			icon: <AiOutlineGithub size={'32px'} />,
			url: 'https://github.com/jpclrocha',
		},
		{
			name: 'Email',
			icon: <AiOutlineMail size={'32px'} />,
			url: 'mailto:jpclrocha@gmail.com',
		},
		{
			name: 'Twitter',
			icon: <AiOutlineTwitter size={'32px'} />,
			url: 'https://twitter.com/notjope',
		},
	]

	return (
		<div className='flex flex-col w-full h-fit p-10' id='contact'>
			<h1 className='w-full h-fit text-4xl mb-5'>Contact</h1>
			<h1 className='w-fit h-fit text-2xl mb-5'>
				Get in touch with me via social media or email.
			</h1>

			<div className='flex flex-col flex-wrap h-2/3 gap-6'>
				{social.map((item) => {
					return (
						<div
							key={item.name}
							className='flex w-fit h-fit items-center'
						>
							<a
								href={item.url}
								target='_blank'
								rel='noreferrer'
								className='inline-flex items-center'
							>
								{item.icon}
								<h1 className='text-xl'>{item.name}</h1>
							</a>
						</div>
					)
				})}
			</div>
		</div>
	)
}
