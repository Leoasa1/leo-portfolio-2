import Head from "next/head";
import React from "react";
import Navbar from "./Navbar";

// Main global layout component
const Layout = ({ title, description, children }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
			</Head>
			<Navbar />
			<main translate="no">
				{children}
			</main>
		</>
	);
};

// Default values for title and descirption 
Layout.defaultProps = {
	title: "Leo's Portfolio",
	description: "My past projects and experiences",
};

export default Layout;
