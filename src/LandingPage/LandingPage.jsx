import React from 'react'
import SocialMedia from '../SocialMedia/SocialMedia'

export default function LandingPage() {
	return (
		<div className='bg-green-700 flex w-full h-[92vh] items-center justify-evenly'>
			<div className='flex-col'>
				<h1 className='text-7xl'>João Laranjeira</h1>
				<h1 className='text-4xl'>Student & Developer</h1>
				<SocialMedia />
			</div>
			<img
				src='photo.jpg'
				alt='me'
				className='w-[20vw] h-[20vw] rounded-full'
			/>
		</div>
	)
}
