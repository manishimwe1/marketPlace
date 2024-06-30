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
import { cn, removeDuplicates } from "@/lib/utils";
import { Bars4Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import MenuNavigation from "./shared/MenuNavigation";
import { ICategory } from "@/typing";
import Loader from "./shared/Loader";

const Menubar = ({
	allProductCategory,
}: {
	allProductCategory: ICategory[];
}) => {
	console.log(allProductCategory, "This is category");

	return (
		<nav className='bg-primary py-2 lg:py-6  w-full h-8 lg:h-10 flex gap-6 items-center'>
			<div className='max-w-7xl  mx-auto py-8 flex justify-between items-center gap-6 h-full w-full'>
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuTrigger>
								<div className='flex gap-4 items-center'>
									<Bars4Icon className='w-5 h-5 lg:w-7 lg:h-7 text-light-2' />
									<p className='font-semibold text-sm lg:text-lg !text-light-2'>
										All Categories
									</p>
								</div>
							</NavigationMenuTrigger>
							<NavigationMenuContent className=' py-2 lg:py-4 mr-4 text-light-2 lg:w-[200px]'>
								<NavigationMenuLink>
									{allProductCategory ? (
										removeDuplicates(
											allProductCategory,
										).map(
											(category) => (
												<div
													key={
														category._id
													}
													className='flex flex-col gap-2 px-2 text-light-2'>
													<Link
														key={
															category._id
														}
														href={`/product/category/${category._id}`}
														className={cn(
															"hover:underline hover:underline-offset-2 text-lg font-bold text-dark-2 text-nowrap lg:pl-5",
														)}>
														{
															category.category
														}
													</Link>
												</div>
											),
										)
									) : (
										<Loader />
									)}
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
									: "text-light-2",
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
