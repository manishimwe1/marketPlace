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
		<div className=' w-full  flex justify-between items-center lg:pr-20 '>
			<h2 className='title !text-purple-300'>
				{title}
			</h2>
			<Link href={href}>
				<ShimmerButton title={buttonText} />
			</Link>
		</div>
	);
};

export default DashboardHeaderBox;
