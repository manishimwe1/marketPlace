import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@/components/ui/avatar";
import { auth, signOut } from "@/lib/auth";
import { Button } from "./ui/button";
import { handleSignout } from "@/lib/actions/actions";

const UserButton = async () => {
	const session = await auth();
	// console.log(session?.user.name?);

	return (
		<>
			{session ? (
				<DropdownMenu>
					<DropdownMenuTrigger>
						<Avatar>
							<AvatarImage
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
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						{/* <DropdownMenuSeparator /> */}
						<DropdownMenuItem className='cursor-pointer'>
							Profile
						</DropdownMenuItem>
						<DropdownMenuItem>
							<form
								className='w-full'
								action={handleSignout}>
								<Button variant={"link"}>
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
