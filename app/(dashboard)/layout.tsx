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
					<div className='flex-1  flex justify-end h-fit px-4'>
						<SearchBox />
					</div>
					<div className=' hidden lg:flex items-center lg:w-[30%]  h-full  gap-4 justify-end'>
						<LucideMessageSquareQuote className='h-6 w-6 text-primary cursor-pointer' />
						<BellIcon className='h-6 w-6 text-primary cursor-pointer' />
						<User2Icon className='h-6 w-6 text-primary cursor-pointer' />
					</div>
				</nav>
				{children}
			</div>
		</main>
	);
}

//
