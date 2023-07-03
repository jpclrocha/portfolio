import { FaCode, FaRegEye } from 'react-icons/fa'

const containerType = {
	normal: '',
	inverted: '-reverse',
}

export default function CardProject({
	name,
	description,
	stack,
	image_url,
	repo_url,
	homepage,
	type,
}) {
	return (
		<div
			key={name}
			className={`flex flex-col-reverse w-full h-fit mb-20  justify-center lg:flex-row${containerType[type]} lg:gap-10 lg:items-center xl:items-start`}
		>
			<div className='w-full h-fit mt-5 lg:w-3/5 lg:mt-0'>
				<h1 className='text-2xl mb-2 md:text-4xl lg:text-2xl lg:mb-0 xl:text-4xl xl:mb-4'>
					{name}
				</h1>
				<p className='text-base md:text-2xl lg:text-base xl:text-2xl xl:mb-4'>
					{description}
				</p>
				<div className='flex w-fit h-fit mt-5 md:text-2xl lg:text-base lg:mt-0 xl:text-2xl xl:mb-4'>
					{stack.map((item) => {
						return (
							<h1 key={item} className='mr-4'>
								{item}
							</h1>
						)
					})}
				</div>

				<div className='flex mt-3 lg:mt-0'>
					<a
						href={repo_url}
						target='_blank'
						rel='noreferrer'
						className='flex w-fit h-10 justify-center items-center m-2'
					>
						<FaCode size={48} />
					</a>
					<a
						href={homepage}
						target='_blank'
						rel='noreferrer'
						className='flex w-fit h-10 justify-center items-center m-2'
					>
						<FaRegEye size={48} />
					</a>
				</div>
			</div>

			<img
				src={image_url}
				alt={name}
				className='w-full h-fit rounded-md lg:w-1/3'
			/>
		</div>
	)
}
