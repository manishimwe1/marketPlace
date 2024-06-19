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
import { useRouter } from "next/navigation";

const ActionButtonPage = ({
	storeId,
}: {
	storeId: string;
}) => {
	const router = useRouter();
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<MoreVerticalIcon className='text-sm text-stone-500 h-4  w-4 ' />
			</DropdownMenuTrigger>
			<DropdownMenuContent className='text-light-2 border-white/10 hover:bg-black/60 text-dark-2 gap-2'>
				<Link
					href={`/dashboard/shop/${storeId}/edit-shop`}>
					<DropdownMenuItem className='hover:!text-light-1 cursor-pointer  mb-2'>
						Edit
					</DropdownMenuItem>
				</Link>
				<DropdownMenuSeparator className='bg-white/10' />

				<DropdownMenuItem
					onClick={() =>
						DeleteStoreAction(storeId).then(
							() => {
								router.refresh();
							},
						)
					}
					className='hover:bg-black/70 curson-pointer bg-red-500'>
					Delete
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default ActionButtonPage;
