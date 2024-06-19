import { auth, signIn } from "@/auth";
import UserButton from "@/components/UserButton";
import SearchBox from "@/components/shared/SearchBox";
import { Button } from "@/components/ui/button";
import {
	BellAlertIcon,
	ChatBubbleLeftEllipsisIcon,
	UserIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import MobileNavBar from "./MobileNavBar";

const DashboardNav = async () => {
	const session = await auth();

	return (
		<nav className='w-full bg-white-2 sticky z-50 top-0 flex py-1 border-b justify-between items-center h-fit px-3'>
			<Link
				href={"/"}
				className='w-fit flex-1 h-full  cursor-pointer'>
				<h2 className='md:title text-black-2 text-xs '>
					GuraGurisha
				</h2>
			</Link>

			<div className=' flex border items-center w-fit  gap-4 justify-end '>
				<div className='border-2 border-purple-900/20 flex p-2 rounded-full gap-4 w-fit justify-end '>
					<ChatBubbleLeftEllipsisIcon className='h-4 w-4 text-stone-600 cursor-pointer' />
					<BellAlertIcon className='h-4 w-4 text-stone-600  cursor-pointer' />
					<UserIcon className='h-4 w-4 text-stone-600  cursor-pointer' />
				</div>
				<div className='w-[400px] flex items-center justify-end border'>
					<SearchBox />
				</div>

				<div className='bg-white-1 w-fit h-full p-2 rounded-full px-4'>
					{!session && (
						<form
							className='w-full'
							action={async () => {
								"use server";
								await signIn("google");
							}}>
							<Button
								variant={"link"}
								className='text-black-2 hover:text-purple-200'>
								Sign in
							</Button>
						</form>
					)}
					<UserButton />
				</div>
			</div>

			<MobileNavBar />
		</nav>
	);
};

export default DashboardNav;
