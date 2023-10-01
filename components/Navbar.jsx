import Link from "next/link";
import React from "react";

// Navbar component with links to home and about page
const Navbar= () => {
	return (
		<div className='fixed z-10 navbar text-white px-5 md:px-10 w-screen items-center'>
			<div >
				<Link className="btn btn-circle lg:mt-2 text-lg" href={"/"}>LA</Link>
			</div>
			<div className='flex-none ml-auto'>
				<div className='flex items-center gap-6 lg:gap-10'>
					<Link className="btn btn-primary btn-sm" href={"/about"}>
						About
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
