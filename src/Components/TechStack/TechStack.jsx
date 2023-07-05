import {
	BiLogoJavascript,
	BiLogoSpringBoot,
	BiLogoTailwindCss,
} from 'react-icons/bi'
import {
	FaCss3Alt,
	FaDocker,
	FaGitAlt,
	FaHtml5,
	FaJava,
	FaReact,
	FaSass,
} from 'react-icons/fa'

export default function TechStack() {
	const skills = [
		<FaReact size={'56px'} key={0} />,
		<FaJava size={'56px'} key={1} />,
		<BiLogoSpringBoot size={'56px'} key={2} />,
		<FaDocker size={'56px'} key={3} />,
		<BiLogoTailwindCss size={'56px'} key={4} />,
		<FaCss3Alt size={'56px'} key={5} />,
		<FaHtml5 size={'56px'} key={6} />,
		<BiLogoJavascript size={'56px'} key={7} />,
		<FaSass size={'56px'} key={8} />,
		<FaGitAlt size={'56px'} key={9} />,
	]
	return (
		<div className='flex flex-wrap w-full h-fit gap-4'>
			{skills.map((item) => (
				<div
					className='flex justify-center items-center'
					key={item.key}
					title={item}
				>
					{item}
				</div>
			))}
		</div>
	)
}
