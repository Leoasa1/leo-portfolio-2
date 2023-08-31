import React, { lazy, useEffect } from "react";
import { useRouter } from "next/router";
import {
	Float,
	Environment,
	PresentationControls,
	ContactShadows,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { createClient } from "@/prismicio";
import DocumentToArticleMapper  from '@/interface/document';

const ImageCarousel = ({previousSlide, nextSlide, image_url, id}) => {
	return (
		<div id={id} className="carousel-item relative w-full">
			<img src={image_url} className="w-full" alt="Screenshot of the project" />
			<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
			<a href={previousSlide} className="btn btn-circle">❮</a> 
			<a href={nextSlide} className="btn btn-circle">❯</a>
			</div>
		</div> 
	)
}


const ProjectDetails= ({ project }) => {
	const router = useRouter();

	const ModelComponent = lazy(
		() => import("@/components/computerModel/ComputerModel")
	);

	useEffect(() => {
		if (!project){
			router.push('/')
		}
	}, []);

	return (
		<>
			{project ?
				<div className='grid md:grid-cols-2 outline-none h-screen w-full z-0'>
				<div className='h-80 md:h-full w-screen md:w-full z-0'>
					<Canvas>
						<color args={["#6887a3"]} attach='background' />
						<Environment preset='apartment' />
						<ambientLight intensity={4} />
						<PresentationControls
							global
							polar={[-0.2, 0.1]}
							rotation={[0.13, 0.1, 0]}
							azimuth={[-1, 1]}
							config={{ mass: 2, tension: 400 }}
							snap={{ mass: 4, tension: 100 }}
						>
							<Float rotationIntensity={0.4}>
								<ModelComponent url={project.project_url} />
							</Float>
						</PresentationControls>
						<ContactShadows
							position-y={-1.4}
							opacity={0.4}
							scale={10}
							blur={3}
						/>
					</Canvas>
				</div>
				<div className='h-full md:h-screen w-full bg-[#101929] text-white p-5 md:px-10 lg:py-16 overflow-scroll overflow-y-scroll no-scrollbar'>
					<h1 className='text-5xl lg:text-9xl my-5'>{project.title}</h1>
					<div className='carousel w-full mt-5'>
						{project.images.map((img, i) => {
							const id = project.images.indexOf(img);
							return (
								<ImageCarousel
									key={i}
									id={project.images ? id.toString() : ""}
									image_url={img.url}
									previousSlide={`#${(id - 1).toString()}`}
									nextSlide={`#${(id + 1).toString()}`}
								/>
							);
						})}
					</div>
					<ul className='list-disc p-5 text-lg'>
						{project.description.map((desc, i) => {
							return (
								<li key={i}>{desc.text}</li>
							)
						})}
					</ul>
					<a className="btn btn-primary w-full my-5" href={project.project_url}>Visit Project</a>
				</div>
			</div>
			: <></>
			}
		</>
	);
};
export default ProjectDetails;

export const getStaticPaths = async () => {
	return {
		paths: [
			{
				params: {
					slug: "duck-boyz",
				},
			},
			{
				params: {
					slug: "rentals",
				},
			},
			{
				params: {
					slug: "movie-night",
				},
			},
			{
				params: {
					slug: "all-invest",
				},
			},
		],
		fallback: true,
	};
};

export async function getStaticProps(context, previewData) {
	const slug = context.params.slug;

	const client = createClient({ previewData });
  
	const projectDoc = await client.getByUID('project', slug);
	const project = DocumentToArticleMapper(projectDoc);
  
	return {
		props: {
			project,
		},
	}
}