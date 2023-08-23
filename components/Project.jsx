import React from 'react'
import Link from 'next/link';

const Project = ({ description, title, link }) => {
	return (
		<section className='h-screen w-screen flex flex-col justify-center '>
			<div className='w-full text-center grid lg:grid-cols-3'>
				<div className='grid cols-span-1 gap-2 md:gap-6 lg:gap-16 px-5 py-10 md:p-20 text-center bg-neutral lg:bg-inherit rounded-lg drop-shadow-xl text-white h-full m-5'>
					<h4 className='font-bold border-b border-white mx-auto'>
						Previous Work
					</h4>
					<h3 className='text-5xl md:text-9xl 2xl:text-[13rem] '>
						{title}
					</h3>
					<p>{description}</p>
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