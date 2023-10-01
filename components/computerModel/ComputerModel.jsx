import React from "react";
import { useGLTF } from "@react-three/drei";
import { Html } from "@react-three/drei";
import Styles from "./Styles.module.scss";

// 3D Computer model component for displaying project page
export default function Model({url}) {
	const computer = useGLTF(
		"https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
	);
	return (
		<primitive object={computer.scene} position={[0, -1.2, 1.5]}>
			<Html
				transform
				wrapperClass={Styles.htmlScreen}
				distanceFactor={1.17}
				position={[0, 1.56, -1.4]}
				rotation-x={-0.256}
			>
				<iframe src={url} className="relative z-0" />
			</Html>
		</primitive>
	);
}
