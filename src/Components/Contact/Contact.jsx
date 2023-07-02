import React from 'react'

export default function Contact() {
	const socialMedia = [
		{ name: 'linkedin', url: 'https://www.linkedin.com/in/jpclrocha/' },
		{ name: 'github', url: 'https://github.com/jpclrocha' },
		{ name: 'email', url: 'mailto:jpclrocha@gmail.com' },
		{ name: 'twitter', url: 'https://twitter.com/notjope' },
		{ name: 'whatsapp', url: 'https://wa.me/5582993125363' },
	]
	return (
		<div className='flex flex-col w-full h-[90vh] p-10' id='contact'>
			<h1 className=' w-full h-fit text-4xl mb-5'>Contact</h1>
			<h1 className=' w-1/3 h-fit text-2xl mb-5'>
				Get in touch with me via social media or email.
			</h1>

			<div className='flex flex-wrap w-2/3'>
				<div className='flex items-center m-3'>
					<h1 className='text-4xl'>Linkedin</h1>
				</div>
			</div>
		</div>
	)
}
