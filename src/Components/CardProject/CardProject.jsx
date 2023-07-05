import { FaCode, FaRegEye } from 'react-icons/fa'

const containerTypes = {
	normal: 'flex-row',
	inverted: 'flex-row-reverse',
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
			className={`flex flex-row-reverse flex-wrap w-full h-fit mb-20 justify-center`}
		>
			<img
				src={image_url}
				alt={name}
				className='w-full h-fit rounded-md md:w-1/4'
			/>
			<div className='flex flex-col w-full h-fit mt-5 md:mt-0 md:m-4 md:w-3/5'>
				<h1 className='text-2xl mb-2 md:text-2xl md:mb-0 xl:text-3xl xl:mb-4'>
					{name}
				</h1>
				<p className='text-base xl:text-xl xl:mb-4'>{description}</p>
				<div className='flex w-fit h-fit mt-5 md:text-base lg:mt-0 xl:text-xl xl:mb-4'>
					{stack.map((item) => {
						return (
							<h1 key={item} className='mr-4'>
								{item}
							</h1>
						)
					})}
				</div>

				<div className='flex mt-3 md:mt-0'>
					<a
						href={repo_url}
						target='_blank'
						rel='noreferrer'
						className='flex w-fit h-10 justify-center items-center m-2'
					>
						<FaCode size={40} />
					</a>
					<a
						href={homepage}
						target='_blank'
						rel='noreferrer'
						className='flex w-fit h-10 justify-center items-center m-2'
					>
						<FaRegEye size={40} />
					</a>
				</div>
			</div>
		</div>
	)
}
