import TechStack from '../TechStack/TechStack'

export default function AboutMe() {
	return (
		<div
			id='about'
			className='flex flex-col w-full h-fit xl:flex-row xl:h-[70vh]'
		>
			<div className='w-fit p-10'>
				<h1 className='text-4xl'>About Me</h1>
				<p className='text-base md:text-2xl'>
					My name is João Pedro, a.k.a JoPe, and I am graduated in
					Systems Development at the Federal Institute of Alagoas -
					Brazil. I have a passion for technology and am currently
					studying to be a backend developer. I also have a passion
					for music and sports. I play table tennis and I'm a very
					competitive person, and like any good sportsman, I like
					challenges, especially by stronger players, it gives me will
					to continuing training, learning and improving.
				</p>
				<p className='text-xs md:text-lg mt-2'>
					"Do you be yourself and make sure that you love being
					yourself. It’s gonna be roadblocks, there’s gonna be
					tribulations but always remember this is a life experience.
					Accept the experience, appreciate the experience and learn
					how to move on from things that don’t serve you well. And
					find your journey, respect your journey and love it" -
					Kendrick Lamar
				</p>
			</div>

			<div className='p-10'>
				<h1 className='text-4xl'>My Skills</h1>
				<TechStack />
			</div>
		</div>
	)
}
