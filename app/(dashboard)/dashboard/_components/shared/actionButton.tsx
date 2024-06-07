"use client";

import { MoreVerticalIcon, Store } from "lucide-react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DeleteStoreAction } from "../../_actions/deleteStoreAction";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ActionButtonPage = ({
	storeId,
}: {
	storeId: string;
}) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<MoreVerticalIcon className='text-sm text-stone-500 h-4  w-4 ' />
			</DropdownMenuTrigger>
			<DropdownMenuContent className='bg-gradient border-white/10 hover:bg-black/60 text-purple-300 gap-2'>
				<DropdownMenuLabel>
					Actions
				</DropdownMenuLabel>
				<DropdownMenuSeparator className='bg-white/10' />
				<Link
					href={`/dashboard/shop/${storeId}/edit-shop`}>
					<DropdownMenuItem className='!hover:bg-black/70 cursor-pointer  mb-2'>
						Edit
					</DropdownMenuItem>
				</Link>

				<DropdownMenuItem
					onClick={() =>
						DeleteStoreAction(storeId)
					}
					className='hover:bg-black/70 curson-pointer bg-red-500'>
					Delete
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default ActionButtonPage;
