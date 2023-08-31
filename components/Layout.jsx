import Head from "next/head";
import React from "react";
import Navbar from "./Navbar";

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

Layout.defaultProps = {
	title: "Leo's Portfolio",
	description: "My past projects and experiences",
};

export default Layout;
