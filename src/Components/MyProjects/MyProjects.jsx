import axios from 'axios'
import React, { useEffect } from 'react'
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
	]

	return (
		<div className='bg-red-400 flex flex-wrap w-full h-fit p-10'>
			<h1 className='bg-yellow-500 w-[30vw] h-fit text-4xl mb-10'>
				My projects
			</h1>

			<div className='bg-blue-900 flex flex-wrap w-[95vw] h-fit'>
				{projects.map((item) => (
					<CardProject {...item} key={item.name} />
				))}
			</div>
		</div>
	)
}
