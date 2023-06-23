import React from 'react'
import SocialMedia from '../SocialMedia/SocialMedia'
import TechStack from '../TechStack/TechStack'

export default function LandingPage() {
	return (
		<div className='bg-green-700 flex w-full h-[92vh] items-center justify-evenly'>
			<div className='bg-blue-500 flex flex-col items-center'>
				<h1 className='text-7xl font-bold'>João Laranjeira</h1>
				<h1 className='text-4xl'>Student & Developer</h1>
				<SocialMedia />
			</div>
			<img
				src='photo.jpg'
				alt='A photo with me and a beach on the background'
				className='w-[20vw] h-[20vw] rounded-full'
			/>
		</div>
	)
}
