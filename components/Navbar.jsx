import Link from "next/link";
import React from "react";

const Navbar= () => {
	return (
		<div className='fixed z-10 navbar text-white md:px-10 w-screen'>
			<div className='flex-none ml-auto'>
				<div className='flex items-center gap-6 lg:gap-10'>
					<Link className='' href={"/about"}>
						About
					</Link>
					<Link className='btn btn-primary' href={"/"}>
						Contact
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
