"use client";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVerticalIcon } from "lucide-react";
import React from "react";

const MoreButton = () => {
	return (
		<div>
			<DropdownMenu>
				<DropdownMenuTrigger>
					<MoreVerticalIcon className='h-10 w-10 cursor-pointer text-muted-foreground hover:text-stone-950' />
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem>
						<p className='text-purple-500'>
							hello
						</p>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};

export default MoreButton;
