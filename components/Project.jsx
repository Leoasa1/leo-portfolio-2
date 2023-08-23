import React from 'react'
import Link from 'next/link';

const Project = ({ description, title, link }) => {
	return (
		<section className='h-screen w-screen flex flex-col justify-center '>
			<div className='w-full text-center grid grid-cols-3'>
				<div className='grid cols-span-1 md:gap-6 lg:gap-16 p-5 md:p-20 text-center'>
					<h4 className='font-bold border-b mx-auto'>
						Previous Work
					</h4>
					<h3 className='text-xl md:text-9xl 2xl:text-[13rem] text-white'>
						{title}
					</h3>
					<p className='text-white'>{description}</p>
					<Link
						href={`/project/${link}`}
						className='btn btn-md mx-auto btn-primary'
						replace
					>
						View Project
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Project