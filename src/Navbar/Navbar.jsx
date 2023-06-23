import WavingHand from './WavingHand'

export default function Navbar() {
	return (
		<nav className='inline-flex bg-red-600 w-full h-[8vh] items-center justify-between px-12'>
			<div className='inline-flex items-center'>
				<WavingHand />
				<h1 className='pl-2 text-2xl'>Hello There!</h1>
			</div>
			<ul className='inline-flex bg-yellow-400 w-1/3 h-8 items-center justify-evenly'>
				<li className='text-2xl '>About</li>
				<li className='text-2xl'>Projects</li>
			</ul>
		</nav>
	)
}
