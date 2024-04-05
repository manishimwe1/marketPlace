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

const MenuNavigation = ({
	title,
	className,
}: {
	title: string;
	className?: string;
}) => {
	return (
		<NavigationMenu className=''>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>
						<p
							className={cn(
								title === "Sort by" &&
									"text-sm  font-medium",
								"font-semibold text-lg",
								className,
							)}>
							{title}
						</p>
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<NavigationMenuLink>
							<p className='!w-full border '>
								Home kit
							</p>
						</NavigationMenuLink>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
};

export default MenuNavigation;
