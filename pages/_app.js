import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '@/prismicio'
import { motion, AnimatePresence } from "framer-motion"; 
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
	return (
		<AnimatePresence mode="wait">
			<motion.div key={router.pathname}>
				<Layout>
					<PrismicPreview repositoryName={repositoryName} />
					<Component {...pageProps} />
				</Layout>
				<motion.div className="slide-in absolute z-40" initial={{scaleX: 0}} animate={{scaleX: 0}} exit={{scaleX: 1}} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1]}} />
				<motion.div className="slide-out absolute z-40" initial={{scaleX: 1}} animate={{scaleX: 0}} exit={{scaleX: 0}} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1]}} />
			</motion.div>
		</AnimatePresence>
	);
}
