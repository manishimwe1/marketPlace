import { UserIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import Image from "next/image";
import ShoppingCart from "./ShoppingCart";
import UserButton from "./UserButton";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { auth, signIn } from "@/auth";
import Link from "next/link";
const Navbar = async () => {
	const user = await auth();

	return (
		<header className='bg-primary w-full lg:h-20 sticky top-0 z-20 h-full'>
			<div className='md:max-w-7xl w-full mx-auto flex  justify-between items-center gap-6 h-full py-2 lg:py-4'>
				<Link href={"/"}>
					<div className='relative h-10 lg:h-14 w-10 lg:w-20 cursor-pointer'>
						<Image
							src={"/logo.svg"}
							fill
							className='object-contain'
							alt='logo'
						/>
					</div>
				</Link>
				<form className=' flex items-center gap-2 bg-secondary rounded-full pr-2 px-2 flex-1'>
					<Input
						className='outline-none rounded-full  w-full bg-secondary border-none text-stone-950 font-semibold'
						placeholder='Search everything at online and in store'
					/>
					<div className='bg-primary flex rounded-full p-0 lg:p-0.5 cursor-pointer'>
						<MagnifyingGlassIcon className='w-6 h-6 lg:w-8 lg:h-8 text-muted p-1' />
					</div>
					<button type='submit' hidden>
						search
					</button>
				</form>
				{user?.user ? (
					<UserButton />
				) : (
					<form
						className='w-fit'
						action={async () => {
							"use server";
							await signIn("google");
						}}>
						<Button
							variant={"link"}
							type='submit'
							size={"sm"}
							className='text-purple-100 w-fit  '>
							<UserIcon className='lg:w-8  w-6 lg:h-8 text-purple-200' />
							Sign in
						</Button>
					</form>
				)}
				<ShoppingCart />
			</div>
		</header>
	);
};

export default Navbar;
