import React from 'react'

const BioRow = ({year, description}) => {
    return (
        <div className='flex items-center text-lg lg:text-2xl gap-4 my-2'>
            <div className='font-bold'>{year}</div>
            <div>{description}</div>
        </div>
    )
} 

const About = () => {
  return (
		<div className='h-screen bg-[#101929]'>
			<div className='container mx-auto pt-20 lg:pt-40 text-white px-5'>
				<div className='flex items-center justify-between w-full gap-4'>
					<div className='w-20 md:w-40 xl:w-80 rounded-full overflow-hidden'>
						<img
							className=''
							src={"./images/profile.jpg"}
							alt='Picture of Leo.'
						/>
					</div>
					<div>
						<h1 className='text-4xl md:text-6xl lg:text-[6rem] xl:text-[8rem] 2xl:text-[10rem] 3xl:text-[12rem] 4xl:text-[15rem]'>
							Leo Asadourian
						</h1>
						<p className='text-lg lg:text-xl xl:text-2xl md:px-1 xl:px-4 3xl:px-5'>
							Software Engineer (Photographer, Artist)
						</p>
					</div>
				</div>
				<div className='py-10 xl:py-20'>
					<h2 className='text-4xl underline mb-5'>Bio</h2>
					<BioRow
						year={"2017"}
						description={"Worked at Bestbuy as Salesman"}
					/>
					<BioRow
						year={"2021"}
						description={
							"Summer Intership at CT Software Solutions / Started Undergraduate Degree at CSUN"
						}
					/>
					<BioRow
						year={"2022"}
						description={
							"Started working at TSENG college at CSUN as tech support specialist"
						}
					/>
					<BioRow
						year={"2023"}
						description={
							"Graduated from CSUN with bachelor's degree in Computer Science"
						}
					/>
					<h2 className='text-4xl underline mt-20 mb-5'>Social Media</h2>
					<div className='grid gap-4'>
						<a
							href='https://www.linkedin.com/in/leo-asadourian/'
							target='_blank'
							rel='noreferrer'
							className='link link-primary'
						>
							Linkedin
						</a>
						<a
							href='https://www.instagram.com/leo_asadourian/'
							target='_blank'
							rel='noreferrer'
							className='link link-primary'
						>
							Instagram
						</a>
						<a
							href='https://500px.com/p/leoasa84'
							target='_blank'
							rel='noreferrer'
							className='link link-primary'
						>
							500px
						</a>
						<a
							href='https://github.com/Leoasa1'
							target='_blank'
							rel='noreferrer'
							className='link link-primary'
						>
							GitHub
						</a>
					</div>
				</div>
			</div>
		</div>
  );
}

export default About