import DashBoardSideNav from "@/components/DashBoardSideNav";
import "../globals.css";
import SearchBox from "@/components/shared/SearchBox";
import {
	LucideMessageSquareQuote,
	MessageSquare,
	MessageSquareDot,
	MessageSquareIcon,
	User2Icon,
} from "lucide-react";
import { BellAlertIcon } from "@heroicons/react/24/solid";
import { BellIcon } from "@heroicons/react/24/outline";
import MobileMenuBar from "./dashboard/_components/MobileMenuBar";
import Image from "next/image";
import Link from "next/link";

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className='flex w-full h-screen'>
			<DashBoardSideNav />
			<div className='p-4 flex flex-col  bg-[#FAf4f4] w-full flex-1 shadow-sm shadow-[#1c1636]'>
				<nav className='w-full  flex justify-between items-center h-fit '>
					<Link href={"/"} className='lg:hidden'>
						<div className='relative h-14 w-20  cursor-pointer'>
							<Image
								src={"/logo.svg"}
								fill
								className='object-contain invert'
								alt='logo'
							/>
						</div>
					</Link>
					<div className='flex-1   flex justify-end h-fit px-4'>
						<SearchBox />
					</div>
					<div className=' hidden lg:flex items-center lg:w-[30%]  h-full  gap-4 justify-end'>
						<LucideMessageSquareQuote className='h-6 w-6 text-primary cursor-pointer' />
						<BellIcon className='h-6 w-6 text-primary cursor-pointer' />
						<User2Icon className='h-6 w-6 text-primary cursor-pointer' />
					</div>
				</nav>
				{children}
				<MobileMenuBar />
			</div>
		</main>
	);
}

//
