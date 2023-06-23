import WavingHand from './WavingHand'

export default function Navbar() {
	const navbarLinks = [
		{ text: 'About Me', href: 'about' },
		{ text: 'Projects', href: 'projects' },
		{ text: 'Contact', href: 'contact' },
	]
	return (
		<nav className='inline-flex bg-red-600 w-full h-[8vh] items-center justify-between px-12'>
			<a href='' className='inline-flex items-center'>
				<WavingHand />
				<h1 className='pl-2 text-2xl'>Hello There!</h1>
			</a>

			<ul className='inline-flex bg-yellow-400 w-fit h-8 items-center justify-evenly'>
				{navbarLinks.map((item) => (
					<li key={item.href} className='text-2xl m-2'>
						<a href={`#${item.href}`}>{item.text}</a>
					</li>
				))}
			</ul>
		</nav>
	)
}
