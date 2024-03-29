import Image from "next/image";
import React from "react";
import { Input } from "./ui/input";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import {
	ShoppingCartIcon,
	UserIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { auth, signIn } from "@/lib/auth";
import { Button } from "./ui/button";
import { AuthError } from "next-auth";
import { handleSignIn } from "@/lib/actions/actions";
import UserButton from "./UserButton";
import ShoppingCart from "./ShoppingCart";
const Navbar = async () => {
	const user = await auth();
	console.log(user);

	return (
		<header className='bg-primary w-full lg:h-20 sticky top-0 z-20'>
			<div className='md:max-w-7xl w-full mx-auto flex  justify-between items-center gap-6 h-full py-4 lg:py-8'>
				<div className='relative h-14 w-20 '>
					<Image
						src={"/logo.svg"}
						fill
						className='object-contain'
						alt='logo'
					/>
				</div>
				<form className=' flex items-center gap-2 bg-secondary rounded-full pr-2 py-1 px-2 flex-1'>
					<Input
						className='outline-none rounded-full  w-full bg-secondary border-none text-stone-950 font-semibold'
						placeholder='Search everything at online and in store'
					/>
					<div className='bg-primary flex rounded-full p-0.5 cursor-pointer'>
						<MagnifyingGlassIcon className='w-8 h-8 text-muted p-1' />
					</div>
					<button type='submit' hidden>
						search
					</button>
				</form>
				{user ? (
					<UserButton />
				) : (
					<div className='flex items-center gap-1 '>
						<UserIcon className='lg:w-8  w-6 lg:h-8' />

						<form
							action={handleSignIn}
							className=' !p-0'>
							<Button
								variant={"link"}
								className='!p-0 text-slate-100'>
								Sign in
							</Button>
						</form>
					</div>
				)}
				<ShoppingCart />
			</div>
		</header>
	);
};

export default Navbar;
