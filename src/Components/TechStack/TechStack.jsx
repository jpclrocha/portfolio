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
		<FaReact size={'64px'} key={0} />,
		<FaJava size={'64px'} key={1} />,
		<BiLogoSpringBoot size={'64px'} key={2} />,
		<FaDocker size={'64px'} key={3} />,
		<BiLogoTailwindCss size={'64px'} key={4} />,
		<FaCss3Alt size={'64px'} key={5} />,
		<FaHtml5 size={'64px'} key={6} />,
		<BiLogoJavascript size={'64px'} key={7} />,
		<FaSass size={'64px'} key={8} />,
		<FaGitAlt size={'64px'} key={9} />,
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
