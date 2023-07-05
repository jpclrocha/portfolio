import SocialMedia from '../SocialMedia/SocialMedia'

export default function LandingPage() {
	return (
		<div
			className='flex flex-col-reverse w-full h-[90vh] sm:h-[100vh] md:h-fit md:mb-10 lg:h-[90vh] items-center justify-end lg:flex-row lg:justify-evenly lg:items-center'
			id='home'
		>
			<div className='flex flex-col items-center'>
				<h1 className='text-4xl font-bold md:text-5xl xl:text-7xl'>
					João Laranjeira
				</h1>
				<h1 className='text-xl md:text-3xl xl:text-4xl'>
					Student & Developer
				</h1>
				<SocialMedia />
			</div>
			<img
				src='photo.jpg'
				alt='A photo with me and a beach on the background'
				className='w-[60vw] h-[60vw] rounded-full mt-20 sm:w-[40vw] sm:h-[40vw] lg:w-[30vw] lg:h-[30vw] lg:mt-0 xl:w-[20vw] xl:h-[20vw]'
			/>
		</div>
	)
}
