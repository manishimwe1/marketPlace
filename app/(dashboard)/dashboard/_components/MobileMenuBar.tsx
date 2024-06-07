"use client";

import { DASHBAORD_LINKS } from "@/constants";
import { cn } from "@/lib/utils";
import { PlusIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MoreButton from "./MoreButton";

const MobileMenuBar = () => {
	const pathname = usePathname();
	return (
		<nav className='sm:hidden  w-full flex bg-white border-t-2 border-primary  rounded-lg gap-3  p-2 relative'>
			{DASHBAORD_LINKS.slice(0, 4).map(
				(link, index) => {
					const isActive = link.link === pathname;
					return (
						<ul
							key={link.label}
							className={cn(
								"rounded-lg group w-full h-full flex items-center justify-center",
								isActive && " ",
							)}>
							<Link
								href={link.link}
								className='flex items-center gap-4 p-2 px-4 font-bold text-white text-lg relative'>
								{index === 2 ? (
									<div className='absolute -top-10 inset-x-0   '>
										<div className='relative rounded-full w-14 h-14  border border-purple-950 bg-primary p-2 shadow-md  shadow-purple-500'>
											{/* <Image
											src={link.image}
											alt={link.label}
											fill
											className='object-contain'
                                        /> */}
											<PlusIcon />
										</div>
									</div>
								) : (
									<Image
										src={link.image}
										alt={link.label}
										width={30}
										height={30}
										className='  rounded-full'
									/>
								)}
								<p className='hidden lg:flex'>
									{link.label}
								</p>
							</Link>
						</ul>
					);
				},
			)}
			<MoreButton />
		</nav>
	);
};

export default MobileMenuBar;
