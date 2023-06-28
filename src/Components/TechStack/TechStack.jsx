import React from 'react'
import { TailwindcssPlainIcon } from 'react-devicons'
import Css3OriginalIcon from 'react-devicons/css3/original'
import DockerOriginalIcon from 'react-devicons/docker/original'
import GitOriginalIcon from 'react-devicons/git/original'
import Html5OriginalIcon from 'react-devicons/html5/original'
import JavaOriginalIcon from 'react-devicons/java/original'
import JavascriptOriginalIcon from 'react-devicons/javascript/original'
import ReactOriginalIcon from 'react-devicons/react/original'
import SassOriginalIcon from 'react-devicons/sass/original'
import SpringOriginalIcon from 'react-devicons/spring/original'

export default function TechStack() {
	const skills = [
		<ReactOriginalIcon size={'64px'} key={0} />,
		<JavaOriginalIcon size={'64px'} key={1} />,
		<SpringOriginalIcon size={'64px'} key={2} />,
		<DockerOriginalIcon size={'64px'} key={3} />,
		<TailwindcssPlainIcon size={'64px'} key={4} />,
		<Css3OriginalIcon size={'64px'} key={5} />,
		<Html5OriginalIcon size={'64px'} key={6} />,
		<JavascriptOriginalIcon size={'64px'} key={7} />,
		<SassOriginalIcon size={'64px'} key={8} />,
		<GitOriginalIcon size={'64px'} key={9} />,
	]
	return (
		<div className='bg-white flex flex-wrap w-[35vw] h-fit'>
			{skills.map((item) => (
				<div
					className='bg-gray-700 flex w-[5vw] h-[5vw] m-5 justify-center items-center'
					key={item}
				>
					{item}
				</div>
			))}
		</div>
	)
}
