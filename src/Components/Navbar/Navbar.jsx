import { Link } from 'react-scroll'
import WavingHand from './WavingHand'

export default function Navbar() {
	const navbarLinks = [
		{ text: 'About Me', href: 'about' },
		{ text: 'Projects', href: 'projects' },
		{ text: 'Contact', href: 'contact' },
	]
	return (
		<nav className='bg-deep-blue sticky top-0 w-full p-3 inline-flex h-fit items-center justify-between lg:px-12'>
			<Link
				to='home'
				className='inline-flex items-center cursor-pointer'
				spy
				smooth
				offset={-70}
				duration={500}
			>
				<WavingHand />
				<h1 className='pl-2 text-2xl sm:text-lg lg:text-2xl'>
					Hello There!
				</h1>
			</Link>

			<ul className='hidden sm:inline-flex w-1/2 h-8 items-center justify-evenly'>
				{navbarLinks.map((item) => (
					<Link
						key={item.text}
						className='text-2xl m-2 cursor-pointer sm:w-fit sm:text-lg lg:text-2xl'
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
