"use client";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

const ModalCard = () => {
	const [isOpen, setisOpen] = useState(false);
	return (
		<Dialog>
			<DialogTrigger>Open</DialogTrigger>
			<DialogContent className='bg-purple-500 w-full h-full '>
				<DialogHeader>
					<DialogTitle>
						Are you absolutely sure?
					</DialogTitle>
					<DialogDescription>
						This action cannot be undone. This
						will permanently delete your account
						and remove your data from our
						servers.
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};

export default ModalCard;
