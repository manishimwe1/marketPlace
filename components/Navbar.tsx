import Image from "next/image";
import React from "react";
import { Input } from "./ui/input";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import {
	ShoppingCartIcon,
	UserIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
const Navbar = () => {
	return (
		<header className='bg-primary w-full h-10 py-3 lg:h-20 sticky top-0 z-20'>
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
						className='outline-none rounded-full  w-full bg-secondary border-none'
						placeholder='Search everything at online and in store'
					/>
					<div className='bg-primary flex rounded-full p-0.5 cursor-pointer'>
						<MagnifyingGlassIcon className='w-8 h-8 text-muted p-1' />
					</div>
					<button type='submit' hidden>
						search
					</button>
				</form>
				<div className='lg:flex items-center gap-1 hidden'>
					<UserIcon className='w-8 h-8' />
					<div className='font-semibold flex flex-col'>
						<p>Welcome</p>
						<Link href='/sign-in'>
							Sign in / Register
						</Link>
					</div>
				</div>
				<div className='flex items-center hover:bg-purple-500 px-4 py-2 rounded-full cursor-pointer'>
					<ShoppingCartIcon className='w-6 lg:w-8 h-6 lg:h-8' />
					<div className='flex flex-col'>
						<p className='bg-slate-100 font-bold text-primary w-4  h-4 flex items-center justify-center text-xs rounded-full'>
							0
						</p>
						<p className='text-sm font-semibold hidden lg:inline-block'>
							Cart
						</p>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
