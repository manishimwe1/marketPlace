"use client";

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { NAVLINKS } from "@/constants";
import { cn } from "@/lib/utils";
import { Bars4Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";

const Menubar = () => {
	const [scoll, setScoll] = useState();
	// if (scrollY) {
	// 	console.log(window.scrollY.toFixed());
	// }

	return (
		<nav className='bg-primary py-8  w-full h-10 flex gap-6 items-center'>
			<div className='max-w-7xl mx-auto py-8 flex justify-between items-center gap-6 h-full w-full'>
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuTrigger>
								<div className='flex gap-4 items-center'>
									<Bars4Icon className='w-7 h-7' />
									<p className='font-semibold text-lg'>
										All Categories
									</p>
								</div>
							</NavigationMenuTrigger>
							<NavigationMenuContent>
								<NavigationMenuLink>
									Link
								</NavigationMenuLink>
							</NavigationMenuContent>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
				<ul className=' hidden lg:flex gap-3 w-full justify-evenly'>
					{NAVLINKS.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className={cn(
								link.label === "SuperDeals"
									? "text-red-500"
									: "",
								"hover:underline hover:underline-offset-2 text-lg font-bold",
							)}>
							{link.label}
						</Link>
					))}
				</ul>
				<NavigationMenu className='mr-4'>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuTrigger>
								<p className='font-semibold text-lg'>
									More
								</p>
							</NavigationMenuTrigger>
							<NavigationMenuContent>
								<NavigationMenuLink>
									Link
								</NavigationMenuLink>
							</NavigationMenuContent>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</div>
		</nav>
	);
};

export default Menubar;
