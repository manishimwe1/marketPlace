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
									"text-sm text-light-2   font-medium",
								"font-semibold text-light-2 text-lg",
								className,
							)}>
							{title}
						</p>
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<NavigationMenuLink>
							{title === "Sort by" ? (
								<></>
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
