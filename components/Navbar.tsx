import { NAVLINKS } from "@/constants";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
	return (
		<header className='w-full  py-2'>
			<div className='flex max-w-6xl py-1 px-2 mx-auto  justify-between'>
				<Image
					src={"/logo.png"}
					alt='logo'
					width={40}
					height={40}
					className='object-contain object-center'
				/>

				<ul className='flex gap-4 items-center'>
					{NAVLINKS.map((link) => {
						return (
							<li
								className='font-semibold text-lg cursor-pointer hover:scale-105 hover:transition-all ease-in duration-200 delay-200'
								key={link.href}>
								{link.label}
							</li>
						);
					})}
				</ul>
				<div className='flex items-center gap-4'>
					<SearchIcon className='h-6 w-6 ' />
					<Link href={"/sign-in"}>
						<button className='bg-slate-900 px-8 rounded-full text-lg font-semibold hover:text-slate-300 shadow-sm shadow-slate-700 py-2'>
							Log in
						</button>
					</Link>
				</div>
			</div>
		</header>
	);
}

export default Navbar;
