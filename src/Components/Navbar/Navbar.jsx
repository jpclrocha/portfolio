import { Link, animateScroll as scroll } from 'react-scroll'
import WavingHand from './WavingHand'

export default function Navbar() {
	const navbarLinks = [
		{ text: 'About Me', href: 'about' },
		{ text: 'Projects', href: 'projects' },
		{ text: 'Contact', href: 'contact' },
	]
	return (
		<nav className='bg-deep-blue inline-flex  w-full h-[8vh] items-center justify-between px-12 sticky top-0'>
			<Link
				to='home'
				className='inline-flex items-center cursor-pointer'
				spy
				smooth
				offset={-70}
				duration={500}
			>
				<WavingHand />
				<h1 className='pl-2 text-2xl'>Hello There!</h1>
			</Link>

			<ul className='inline-flex w-1/2 h-8 items-center justify-evenly'>
				{navbarLinks.map((item) => (
					<Link
						key={item.text}
						className='text-2xl m-2 cursor-pointer'
						to={item.href}
						spy
						smooth
						offset={-70}
						duration={500}
					>
						{item.text}
					</Link>
				))}
			</ul>
		</nav>
	)
}
