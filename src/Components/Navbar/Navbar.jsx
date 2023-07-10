import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-scroll'
import WavingHand from './WavingHand'

export default function Navbar() {
	const navbarLinks = [
		{ text: 'About', href: 'about' },
		{ text: 'Projects', href: 'projects' },
		{ text: 'Contact', href: 'contact' },
	]

	const [open, setOpen] = useState(false)

	const toggleNavbar = () => {
		document.body.classList.toggle('overflow-hidden')
		setOpen(!open)
	}

	const closeNavbar = () => {
		document.body.classList.remove('overflow-hidden')
		setOpen(false)
	}

	return (
		<nav className='bg-deep-blue flex flex-wrap sticky top-0 w-full h-fit p-3 items-center justify-between sm:inline-flex lg:px-12'>
			<Link
				to='home'
				className='inline-flex items-center cursor-pointer w-fit h-fit'
				spy
				smooth
				offset={-70}
				duration={500}
				onClick={closeNavbar}
			>
				<WavingHand />
				<h1 className='pl-2 text-2xl sm:text-lg lg:text-2xl'>
					Hello There!
				</h1>
			</Link>

			<button onClick={toggleNavbar} className='sm:hidden'>
				<FaBars size={20} />
			</button>

			<ul
				className={`bg-deep-blue ${
					open ? 'w-2/3' : 'w-0'
				} flex flex-col top-14 absolute h-screen duration-300 sm:inline-flex sm:items-center sm:justify-evenly sm:mt-0 sm:w-1/2 sm:h-8 sm:relative sm:flex-row sm:top-0`}
			>
				{navbarLinks.map((item) => (
					<div
						key={item.text}
						className={`${
							open ? 'flex' : 'hidden'
						} sm:flex flex-nowrap w-fit `}
					>
						<Link
							key={item.text}
							className='text-xl m-2 cursor-pointer w-fit h-fit sm:flex lg:text-2xl'
							to={item.href}
							spy
							smooth
							offset={-70}
							duration={500}
							onClick={closeNavbar}
						>
							{item.text}
						</Link>
					</div>
				))}
			</ul>
		</nav>
	)
}
