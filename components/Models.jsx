import React, { useRef, useLayoutEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll, useTexture } from "@react-three/drei";
import { gsap } from "gsap";

const Models = () => {
	// Initialize reference variables
	const earthRef = useRef();
	const earthMeshRef = useRef();
	const cloudMeshRef = useRef();
	const tl = useRef(null);
	const projectRefs = {
		duckBoyz: useRef(),
		rentals: useRef(),
		movieNight: useRef(),
		allInvest: useRef(),
	};

	// Initialize texture material for earth model
	const earthTextures = useTexture({
		map: "/images/2k_earth_day.jpeg",
		normalMap: "/images/2k_earth_normal_map.jpeg",
	});
	const specular = useTexture("/images/2k_earth_specular_map.jpeg");

	// Initialize texture material for cloud model
	const cloudTexture = useTexture({
		map: "/images/2k_earth_clouds.jpg",
	});

	// Initialize scroll variable
	const scroll = useScroll();

	// Use the useFrame hook to perform actions on each animation frame
	useFrame(() => {
		// Check if the tl (Timeline) ref exists
		if (tl.current) {
			// Seek to a specific time in the animation based on the scroll offset
			tl.current.seek(scroll.offset * tl.current.duration());
		}
	});

	// Animate models with gsap timeline
	useLayoutEffect(() => {
		tl.current = gsap.timeline();
		console.log(tl.current);
		// Earth Rotation to LA
		tl.current.to(
			earthRef.current.rotation,
			{
				duration: 0.5,
				x: Math.PI / 4.5,
				y: Math.PI / 8,
				z: 0,
			},
			0
		);

		// tl.current.to(houseRef.current.children[0].material, { opacity: 0, duration: 0.5 }, 0);
		tl.current.to(
			earthRef.current.rotation,
			{
				duration: 1,
			},
			1
		);

		// Earth position closer on page 2
		tl.current.to(
			earthRef.current.position,
			{
				duration: 0.5,
				x: 1,
				y: 0,
				z: 2,
			},
			0
		);

		// Earth position far on page 3
		tl.current.to(
			earthRef.current.position,
			{
				duration: 0.75,
				z: -10,
			},
			0.75
		);

		// Earth fade out on page 3
		tl.current.to(
			earthMeshRef.current.material,
			{
				duration: 0.75,
				opacity: 0,
			},
			0.75
		);

		// Earth cloud texture fade out on page 3
		tl.current.to(
			cloudMeshRef.current.material,
			{
				duration: 0.75,
				opacity: 0,
			},
			0.75
		);

		// Project-1 screenshot move into frame on page 3
		tl.current.to(
			projectRefs.duckBoyz.current.position,
			{
				duration: 0.25,
				z: 3,
			},
			1
		);

		// Project-1 screenshot move out frame on page 4
		if (projectRefs.duckBoyz.current) {
			tl.current.to(
				projectRefs.duckBoyz.current.position,
				{
					duration: 0.5,
					z: -10.1,
				},
				1.5
			);
		}

		// Project-2 screenshot move into frame on page 4
		tl.current.to(
			projectRefs.rentals.current.position,
			{
				duration: 0.25,
				z: 3,
			},
			1.6
		);

		// Project-2 screenshot move out frame on page 5
		if (projectRefs.rentals.current) {
			tl.current.to(
				projectRefs.rentals.current.position,
				{
					duration: 0.5,
					z: -10.1,
				},
				2
			);
		}

		// Project-3 screenshot move into frame on page 5
		tl.current.to(
			projectRefs.movieNight.current.position,
			{
				duration: 0.25,
				z: 3,
			},
			2.25
		);

		// Project-3 screenshot move out frame on page 6
		if (projectRefs.movieNight.current) {
			tl.current.to(
				projectRefs.movieNight.current.position,
				{
					duration: 0.5,
					z: -10.1,
				},
				2.75
			);
		}

		// Project-4 screenshot move into frame on page 6
		tl.current.to(
			projectRefs.allInvest.current.position,
			{
				duration: 0.25,
				z: 3,
			},
			3
		);
	}, []);

	return (
		<>
			<group ref={earthRef} position={[2, 0, 0]} dispose={null}>
				<mesh ref={earthMeshRef} scale={2}>
					<sphereGeometry args={[1, 100, 100]} />
					<meshLambertMaterial
						{...earthTextures}
						specularMap={specular}
						transparent={true}
					/>
				</mesh>
				<mesh ref={cloudMeshRef} scale={2.03}>
					<sphereGeometry args={[0.99, 100, 100]} />{" "}
					<meshStandardMaterial
						{...cloudTexture}
						transparent
						opacity={0.4}
					/>
				</mesh>
			</group>

			<Project
				reference={projectRefs.duckBoyz}
				image={"/images/duckboyz.jpeg"}
			/>
			<Project
				reference={projectRefs.rentals}
				image={"/images/rentals.jpg"}
			/>
			<Project
				reference={projectRefs.movieNight}
				image={"/images/movienight.jpeg"}
			/>
			<Project
				reference={projectRefs.allInvest}
				image={"/images/allinvest.jpeg"}
			/>
		</>
	);
};

// Project component for displaying website screenshots
const Project = ({ reference, image }) => {
	const meshTexture = useTexture(image);

	return (
		<group ref={reference} position={[1, 0, 10]}>
			<mesh rotation={[0, -0.1, 0]}>
				<planeGeometry args={[3, 2.0]} />
				<meshBasicMaterial map={meshTexture} />
			</mesh>
		</group>
	);
};

export default Models;