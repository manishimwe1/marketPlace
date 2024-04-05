"use client";

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { NAVLINKS } from "@/constants";
import { cn } from "@/lib/utils";
import { Bars4Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import MenuNavigation from "./shared/MenuNavigation";

const Menubar = () => {
	// useEffect(() => {
	// 	// console.log(scoll, "this is scoll", prevScroll);
	// 	document.addEventListener("scroll", () => {
	// 		setprevScroll(Number(scrollY.toFixed()));
	// 		setScoll([
	// 			prevScroll,
	// 			Number(scrollY.toFixed()),
	// 		]);
	// 	});
	// 	if (scoll[0] > scoll[1]) {
	// 		setShowMenu(true);
	// 	} else {
	// 		setShowMenu(false);
	// 	}
	// 	return () => {
	// 		document.removeEventListener("scroll", () => {
	// 			setScoll([
	// 				prevScroll,
	// 				Number(scrollY.toFixed()),
	// 			]);
	// 		});
	// 	};
	// }, [scrollY.toFixed()]);

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
				<MenuNavigation title='More' />
			</div>
		</nav>
	);
};

export default Menubar;
