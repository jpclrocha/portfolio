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
			icon: <AiOutlineLinkedin size={'64px'} />,
			url: 'https://www.linkedin.com/in/jpclrocha/',
		},
		{
			name: 'GitHub',
			icon: <AiOutlineGithub size={'64px'} />,
			url: 'https://github.com/jpclrocha',
		},
		{
			name: 'Email',
			icon: <AiOutlineMail size={'64px'} />,
			url: 'mailto:jpclrocha@gmail.com',
		},
		{
			name: 'Whatsapp',
			icon: <AiOutlineWhatsApp size={'64px'} />,
			url: 'https://api.whatsapp.com/send?phone=5582993125363',
		},
		{
			name: 'Twitter',
			icon: <AiOutlineTwitter size={'64px'} />,
			url: 'https://twitter.com/notjope',
		},
		{
			name: 'Instagram',
			icon: <AiOutlineInstagram size={'64px'} />,
			url: 'https://instagram.com/jpclrocha',
		},
	]
	return (
		<div className='flex flex-col w-full h-[80vh] p-10' id='contact'>
			<h1 className='w-full h-fit text-4xl mb-5'>Contact</h1>
			<h1 className='w-1/3 h-fit text-2xl mb-5'>
				Get in touch with me via social media or email.
			</h1>

			<div className='flex flex-col flex-wrap h-2/3 gap-6'>
				{social.map((item) => {
					return (
						<div
							key={item.name}
							className='flex w-fit h-fit items-center'
						>
							<a href={item.url} target='_blank' rel='noreferrer'>
								{item.icon}
							</a>
							<h1 className='text-4xl'>{item.name}</h1>
						</div>
					)
				})}
			</div>
		</div>
	)
}
