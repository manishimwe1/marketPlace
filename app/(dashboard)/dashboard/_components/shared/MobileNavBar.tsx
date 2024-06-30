"use client";

import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from "@/components/ui/sheet";
import { DASHBAORD_LINKS } from "@/constants";
import { cn } from "@/lib/utils";
import { Bars4Icon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNavBar = () => {
	const pathname = usePathname();
	return (
		<Sheet>
			<SheetTrigger>
				<div className='w-fit cursor-pointer lg:hidden hover:text-purple-400 h-full mr-2'>
					<Bars4Icon className='h-8 w-8 text-purple-200' />
				</div>
			</SheetTrigger>
			<SheetContent
				className='bg-slate-100 border-white/20'
				side={"left"}>
				<aside className='w-full p-2 text-center flex flex-col gap-4'>
					<nav className=' py-5 '>
						<Link
							href={"/"}
							className='w-fit h-full  cursor-pointer mb-6'>
							<h2 className='font-bold text-left text-3xl  text-dark-2  '>
								GuraGurisha
							</h2>
						</Link>

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
										className='flex items-center gap-4 p-2 px-4 font-bold text-dark-2 text-lg'>
										<Image
											src={link.image}
											alt={link.label}
											width={20}
											height={20}
											className=' '
										/>

										<SheetClose>
											<p className='text-sm font-semibold '>
												{link.label}
											</p>
										</SheetClose>
									</Link>
								</ul>
							);
						})}
					</nav>
				</aside>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNavBar;
