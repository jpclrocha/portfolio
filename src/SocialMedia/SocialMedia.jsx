import { SocialIcon } from 'react-social-icons'

export default function SocialMedia() {
	return (
		<div className='inline-flex'>
			<SocialIcon
				url='https://www.linkedin.com/in/jpclrocha/'
				target='_blank'
				bgColor='black'
				fgColor='white'
				style={{ width: 40, height: 40 }}
			/>
			<SocialIcon
				url='https://github.com/jpclrocha'
				target='_blank'
				bgColor='black'
				fgColor='white'
				style={{ width: 40, height: 40 }}
			/>
			<SocialIcon
				url='mailto:jpclrocha@gmail.com'
				target='_blank'
				bgColor='black'
				fgColor='white'
				style={{ width: 40, height: 40 }}
			/>
		</div>
	)
}
