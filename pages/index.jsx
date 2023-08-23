import React from "react";
import { Canvas } from "@react-three/fiber";
import Environment from "../components/Environment";

const Home = () => {
	return (
		<div className='outline-none h-screen w-full z-0'>
			<Canvas>
				<Environment />
			</Canvas>
		</div>
	);
};

export default Home;
