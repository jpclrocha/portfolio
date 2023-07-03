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
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Ipsum harum, pariatur modi fugiat sit mollitia dolores
					dolore architecto cumque? Exercitationem suscipit expedita
					atque maiores iste quidem obcaecati aliquid, eius adipisci!
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Officiis error cum, eveniet asperiores architecto,
					voluptatibus esse ea amet animi nostrum non obcaecati,
					placeat accusamus tempore in repellendus? Quia, adipisci
					atque?
				</p>
			</div>

			<div className='p-10'>
				<h1 className='text-4xl'>My Skills</h1>
				<TechStack />
			</div>
		</div>
	)
}
