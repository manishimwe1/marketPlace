"use client";

import { DASHBAORD_LINKS } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DashBoardSideNav = () => {
	const pathname = usePathname();
	return (
		<section className=' hidden sm:flex sm:w-20 lg:w-[200px] h-full py-4 sticky top-0 left-0'>
			<aside className='w-full p-2 text-center flex flex-col gap-4'>
				<nav className=' py-5 '>
					<div className=' pb-4 px-2 flex w-full justify-between items-center relative'>
						<div className=' hidden lg:flex items-center gap-1 cursor-pointer'>
							<Image
								src={"/chart.svg"}
								alt={"chart"}
								width={20}
								height={20}
								className=''
							/>
							<p className='flex items-center gap-4 p-2 px-4 font-bold text-white text-lg'>
								Activity
							</p>
						</div>
						<p className='bg-purple-500 h-7 hidden  lg:flex text-center justify-center font-bold text-purple-100 w-7 rounded-full absolute top-0 right-4 cursor-pointer ScaleAnimation'>
							10
						</p>
					</div>
					{DASHBAORD_LINKS.map((link) => {
						const isActive =
							link.link === pathname;
						return (
							<ul
								key={link.label}
								className={cn(
									" mt-2 py-1  rounded-lg group w-full",
									isActive &&
										" bg-purple-500",
								)}>
								<Link
									href={link.link}
									className='flex items-center gap-4 p-2 px-4 font-bold text-white text-lg'>
									<Image
										src={link.image}
										alt={link.label}
										width={20}
										height={20}
										className='invert '
									/>
									<p className='hidden lg:flex'>
										{link.label}
									</p>
								</Link>
							</ul>
						);
					})}
				</nav>
			</aside>
		</section>
	);
};

export default DashBoardSideNav;
