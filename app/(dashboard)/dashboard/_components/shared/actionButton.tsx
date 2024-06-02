import { MoreVerticalIcon, Store } from "lucide-react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ActionButtonPage = async () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<MoreVerticalIcon className='text-sm text-stone-500 h-4  w-4 ' />
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>
					My Account
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>Profile</DropdownMenuItem>
				<DropdownMenuItem>Billing</DropdownMenuItem>
				<DropdownMenuItem>Team</DropdownMenuItem>
				<DropdownMenuItem>
					Subscription
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default ActionButtonPage;
