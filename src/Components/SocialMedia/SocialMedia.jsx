import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
export default function SocialMedia() {
	return (
		<div className='flex w-fit h-fit'>
			<a
				href='https://www.linkedin.com/in/jpclrocha/'
				target='_blank'
				rel='noreferrer'
			>
				<FaLinkedin size={48} />
			</a>

			<a
				href='https://github.com/jpclrocha'
				target='_blank'
				rel='noreferrer'
			>
				<FaGithub size={48} />
			</a>

			<a
				href='mailto:jpclrocha@gmail.com'
				target='_blank'
				rel='noreferrer'
			>
				<MdEmail size={48} />
			</a>
		</div>
	)
}
