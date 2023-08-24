import React, { useRef } from "react";
import * as THREE from "three";
import {
	Scroll,
	ScrollControls,
	useHelper,
	PerspectiveCamera,
} from "@react-three/drei";
import Models from "./Models";
import Project from "./Project";
import { motion } from "framer-motion";

const Section = ({children}) => {
	return (
	  <motion.section
		className={`
 	 md:max-w-screen-2xl mx-auto
	flex flex-col items-start justify-center
	`}
		initial={{
		  opacity: 0,
		  y: 50,
		}}
		whileInView={{
		  opacity: 1,
		  y: 0,
		  transition: {
			duration: 1,
			delay: 0.6,
		  },
		}}
	  >
		{children}
	  </motion.section>
	);
  };

const Environment = () => {
	const directionalLight = useRef();
	useHelper(directionalLight, THREE.DirectionalLightHelper, 1);

	return (
		<>
			<PerspectiveCamera makeDefault position={[0, 0, 6]} />
			<directionalLight position={[0, 0, 100]} intensity={5} />
			<ambientLight intensity={0.3} />
			<ScrollControls pages={5} damping={0.3}>
				<Scroll html>
					<section className='h-screen flex flex-col justify-center text-white p-5'>
						<div className='w-full grid grid-cols-4 select-none text-6xl md:text-[8rem] lg:text-[12rem] xl:text-[15rem] 2xl:text-[18rem] 3xl:text-[20rem] 4xl:text-[25rem]'>
							<div className='text-center col-span-2 '>
								Hello
							</div>
							<div
								className={`text-start text-transparent text-white md:text-transparent	 hover:text-white`}
							>
								World
							</div>
							<div className='text-white text-end invisible md:visible'>
								!
							</div>
						</div>
					</section>
					<section className='h-screen flex flex-col justify-center text-white p-5'>
						<div className='w-full grid grid-cols-2'>
							<div className='text-lg md:p-10 max-w-4xl mx-auto h-screen'>
								<h2 className='text-6xl md:text-9xl xl:text-[8rem] 3xl:text-[10rem] 4xl:text-[13rem] mb-5'>
									My name is LEO
								</h2>
								<div className="md:pl-4 mt-4 2xl:mt-10">
									<SkillSection />
								</div>
							</div>
						</div>
					</section>
					<Project
						title={"DUCK BOYZ"}
						description={
							"DUCK BOYZ is a collection of 10,000 randomly generated NFTs living on the Ethereum blockchain."
						}
						link={"duck-boyz"}
					/>
					<Project
						title={"Movie Night"}
						description={
							"MovieNight website has a list of movies to help you plan for movie nights with friends and families."
						}
						link={"movie-night"}
					/>
					<Project
						title={"All Invest"}
						description={
							"This website is designed to help individuals that are looking to invest in properties, stocks and crypto-currencies."
						}
						link={"all-invest"}
					/>
				</Scroll>
				<Models />
			</ScrollControls>
		</>
	);
};

export default Environment;

const skills = [
	{
		title: "Reactjs / Nextjs",
		level: 80
	},
	{
		title: "HTML / CSS",
		level: 95
	},
	{
		title: "Threejs",
		level: 60
	},
	{
		title: "Nodejs",
		level: 80
	},
	{
		title: "Python / Scripting",
		level: 50
	}
]

export const SkillSection = () => {
	return (
		<Section>
		  <motion.div whileInView={"visible"}>
			<h2 className="text-5xl my-5">Skills</h2>
			<div className="space-y-4">
			  {skills.map((skill, index) => (
				<div className="w-64" key={index}>
				  <motion.h3
					className="text-xl font-bold text-white"
					initial={{
					  opacity: 0,
					}}
					variants={{
					  visible: {
						opacity: 1,
						transition: {
						  duration: 1,
						  delay: 1 + index * 0.2,
						},
					  },
					}}
				  >
					{skill.title}
				  </motion.h3>
				  <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
					<motion.div
					  className="h-full bg-indigo-500 rounded-full "
					  style={{ width: `${skill.level}%` }}
					  initial={{
						scaleX: 0,
						originX: 0,
					  }}
					  variants={{
						visible: {
						  scaleX: 1,
						  transition: {
							duration: 1,
							delay: 1 + index * 0.2,
						  },
						},
					  }}
					/>
				  </div>
				</div>
			  ))}
			</div>
			</motion.div>
		</Section>
	)
}
