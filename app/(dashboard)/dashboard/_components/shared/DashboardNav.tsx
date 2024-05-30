import UserButton from "@/components/UserButton";
import SearchBox from "@/components/shared/SearchBox";
import { auth } from "@/lib/auth";
import {
	BellAlertIcon,
	UserIcon,
	ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/solid";
import { LucideMessageSquareQuote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const DashboardNav = async () => {
	const session = await auth();

	return (
		<nav className='w-full bg-[#0f050d] sticky top-0 flex py-2 justify-between items-center h-fit px-2 z-20'>
			<Link href={"/"}>
				<h2 className='title !text-secondary cursor-pointer hidden lg:block'>
					GuraGurisha
				</h2>
			</Link>
			<div className='flex-1   flex h-fit px-4'>
				<SearchBox />
			</div>
			<div className=' hidden lg:flex items-center lg:w-[30%]  h-full  gap-4 justify-between '>
				<div className='border-2 border-purple-900 flex p-2 rounded-full gap-4'>
					<ChatBubbleLeftEllipsisIcon className='h-6 w-6 text-purple-200 cursor-pointer' />
					<BellAlertIcon className='h-6 w-6 text-purple-200  cursor-pointer' />
					<UserIcon className='h-6 w-6 text-purple-200  cursor-pointer' />
				</div>
				<div className='bg-gradient-to-tr from-[#0c040b] to-[#1a010f] shadow-md shadow-[#0c040b] w-fit h-full p-2 rounded-full px-4'>
					<UserButton />
				</div>
			</div>
		</nav>
	);
};

export default DashboardNav;
