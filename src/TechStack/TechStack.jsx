import React from 'react'
import { TailwindcssOriginalWordmarkIcon } from 'react-devicons'
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
	return (
		<div className='bg-white flex w-full h-12 items-center'>
			<h1 className='text-2xl'> </h1>
			<ReactOriginalIcon size={'32px'} />
			<JavaOriginalIcon size={'32px'} />
			<SpringOriginalIcon size={'32px'} />
			<DockerOriginalIcon size={'32px'} />
			<TailwindcssOriginalWordmarkIcon size={'128px'} />
			<Css3OriginalIcon size={'32px'} />
			<Html5OriginalIcon size={'32px'} />
			<JavascriptOriginalIcon size={'32px'} />
			<SassOriginalIcon size={'32px'} />
			<GitOriginalIcon size={'32px'} />
		</div>
	)
}
