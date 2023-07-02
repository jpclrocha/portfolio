import { FaCode, FaRegEye } from 'react-icons/fa'

const containerType = {
	normal: 'flex',
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
			className={`flex w-full h-fit mb-20 rounded-2xl p-6 justify-center gap-10 ${containerType[type]}`}
		>
			<div className='w-3/5 h-fit'>
				<h1 className='text-2xl'>{name}</h1>
				<p className='text-base'>{description}</p>
				<div className='flex w-fit h-fit mt-5'>
					{stack.map((item) => {
						return (
							<h1 key={item} className='mr-4'>
								{item}
							</h1>
						)
					})}
				</div>

				<div className='flex mt-3'>
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
				className='w-2/5 h-fit rounded-md'
			/>
		</div>
	)
}
