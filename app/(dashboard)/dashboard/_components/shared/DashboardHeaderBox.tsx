import ShimmerButton from "@/components/ui/ShimmerBtn";
import Link from "next/link";
import React from "react";

type Props = {
	title: string;
	buttonText: string;
	href: string;
};

const DashboardHeaderBox = ({
	title,
	buttonText,
	href,
}: Props) => {
	return (
		<div className=' w-full  flex justify-between items-center lg:pr-20 lg:px-0 px-4'>
			<h2 className='title !text-dark-2'>{title}</h2>
			<Link href={href}>
				<ShimmerButton title={buttonText} />
			</Link>
		</div>
	);
};

export default DashboardHeaderBox;
