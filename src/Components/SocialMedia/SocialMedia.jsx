import { SocialIcon } from 'react-social-icons'

export default function SocialMedia() {
	const socialMedia = [
		'https://www.linkedin.com/in/jpclrocha/',
		'https://github.com/jpclrocha',
		'mailto:jpclrocha@gmail.com',
	]
	return (
		<div className='bg-yellow-500 w-fit'>
			{socialMedia.map((item) => (
				<SocialIcon
					url={item}
					key={item}
					target='_blank'
					bgColor='black'
					fgColor='white'
					style={{ width: 40, height: 40, margin: 1 }}
				/>
			))}
		</div>
	)
}
