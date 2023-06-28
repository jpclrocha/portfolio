import React from 'react'

export default function CardProject({
	name,
	description,
	stack,
	image_url,
	html_url,
	homepage,
}) {
	return (
		<div
			key={name}
			className='bg-green-700 w-[30vw] h-[50vh] m-2 rounded-2xl p-6'
		>
			<img src={image_url} alt={name} className='w-full h-[40%]' />
			<h1 className='text-2xl'>{name}</h1>
			<p className='text-lg'>{description}</p>
			<p>{stack}</p>
			<div className='bg-yellow-200  flex w-full h-fit justify-evenly mt-3'>
				<a
					href={html_url}
					target='_blank'
					rel='noreferrer'
					className='bg-blue-500 flex w-[40%] h-10 justify-center items-center'
				>
					Repository
				</a>
				<a
					href={homepage}
					target='_blank'
					rel='noreferrer'
					className='bg-blue-500 flex w-[40%] h-10 justify-center items-center'
				>
					View Live
				</a>
			</div>
		</div>
	)
}
