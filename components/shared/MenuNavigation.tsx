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

const MenuNavigation = ({ title }: { title: string }) => {
	return (
		<NavigationMenu className='mr-4'>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>
						<p
							className={cn(
								title === "Sort by" &&
									"text-sm  font-medium",
								"font-semibold text-lg",
							)}>
							{title}
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
	);
};

export default MenuNavigation;
