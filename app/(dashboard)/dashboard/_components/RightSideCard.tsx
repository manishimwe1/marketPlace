import { auth } from "@/auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

const RightSideCard = async () => {
	const session = await auth();

	if (!session) {
		redirect("/sign-in");
	}
	// console.log("SESSION", session);

	return (
		<>
			{session && (
				<div className='flex flex-col items-start justify-center p-3'>
					<Image
						src={session?.user??.image ?? ""}
						alt='hand'
						// placeholder="blur"
						width={80}
						height={80}
						className='rounded-full bg-purple-300 '
					/>
					<div className='text-purple-300  flex cursor-pointer'>
						<p className='font-semibold text-base mr-2'>
							{session.user.name}
						</p>
					</div>
					<p className='text-muted-foreground  flex cursor-pointer'>
						{session.user.email}
					</p>
				</div>
			)}
		</>
	);
};

export default RightSideCard;
