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
import { cn } from "@/lib/utils";
import { signIn, useSession } from "next-auth/react";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";

const MenuNavigation = ({
	title,
	className,
}: {
	title: string;
	className?: string;
}) => {
	const session = useSession();
	return (
		<NavigationMenu className=''>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>
						<p
							className={cn(
								title === "Sort by" &&
									"text-sm text-dark-2   font-medium",
								"font-semibold text-dark-2 text-lg",
								className,
							)}>
							{title}
						</p>
					</NavigationMenuTrigger>
					<NavigationMenuContent className='text-dark-2'>
						<NavigationMenuLink className='w-fit'>
							{title === "Sort by" ? (
								<div className='w-20 py-3 px-2'>
									<p className='text-xs py-2 font-semibold text-stone-600  cursor-pointer'>
										Newest
									</p>
									<p className='text-xs py-2 font-semibold text-stone-600 cursor-pointer'>
										Oldest
									</p>
								</div>
							) : session.data?.user ? (
								<Link
									href={
										"/saler/product/create-product"
									}
									className={cn(
										buttonVariants(),
									)}>
									Create product
								</Link>
							) : (
								<div>
									<form
										action={async () =>
											signIn("google")
										}
										className=' !p-0'>
										<Button className='rounded-full text-slate-100'>
											Sign in
										</Button>
									</form>
								</div>
							)}
						</NavigationMenuLink>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
};

export default MenuNavigation;
