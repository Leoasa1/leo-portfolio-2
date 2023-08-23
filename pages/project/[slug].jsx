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


const ProjectDetails= ({ project }) => {
	const router = useRouter();
	const projectName = router.query.details;

	const ModelComponent = lazy(
		() => import("@/components/computerModel/ComputerModel")
	);

	useEffect(() => {
		if (!projectName) {
			return;
		}
	}, []);

	return (
		<div className='grid md:grid-cols-2 outline-none h-auto sm:h-screen w-full z-0'>
			<div className='h-auto'>
				<Canvas>
					<color args={["#6887a3"]} attach='background' />
					<Environment preset='apartment' />
					<ambientLight intensity={4} />
					<PresentationControls
						global
						polar={[-0.3, 0.1]}
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
			<div className='h-full w-full bg-base text-white p-5 md:px-10 md:py-16'>
				<h1 className='text-9xl mb-10'>{project.title}</h1>
				<div>{project.description}</div>
			</div>
		</div>
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
					slug: "movie-night",
				},
			},
			{
				params: {
					slug: "all-invest",
				},
			},
		],
		fallback: true, // false or "blocking"
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