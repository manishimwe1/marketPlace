import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { auth, signIn, signOut } from "@/auth";
import { Button } from "./ui/button";

const UserButton = async () => {
	const session = await auth();
	// console.log(session?.user?.name?);

	return (
		<>
			{session ? (
				<DropdownMenu>
					<DropdownMenuTrigger className='flex gap-2 items-center'>
						<Avatar>
							<AvatarImage
								className='bg-transparent'
								src={
									session?.user?.image ||
									""
								}
							/>

							<AvatarFallback>
								{session?.user?.name?.substring(
									0,
									1,
								)}
							</AvatarFallback>
						</Avatar>
						<p className='text-black-2 text-sm font-semibold text-left md:inline-block hidden'>
							{session?.user?.name}
						</p>
					</DropdownMenuTrigger>
					<DropdownMenuContent className='!w-full'>
						{/* <DropdownMenuSeparator /> */}
						<DropdownMenuItem className='cursor-pointer w-full'>
							Profile
						</DropdownMenuItem>
						<DropdownMenuItem>
							<form
								className='w-full'
								action={async () => {
									"use server";
									await signOut({
										redirect: true,
										redirectTo: "/",
									});
								}}>
								<Button
									variant={"link"}
									type='submit'>
									Sign out
								</Button>
							</form>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			) : null}
		</>
	);
};

export default UserButton;
