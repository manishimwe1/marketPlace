import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const CardProduct = () => {
	return (
		<Card className='w-full'>
			<div className='w-full h-[50%] relative'>
				<Image
					src={"/speaker.png"}
					alt='product'
					fill
					className='object-contain'
				/>
				;
			</div>
			{/* <CardHeader>
				<CardTitle>{}</CardTitle>
				<CardDescription>
					Card Description
				</CardDescription>
			</CardHeader>
			<CardContent>
				<p>Card Content</p>
			</CardContent>
			<CardFooter>
				<p>Card Footer</p>
			</CardFooter> */}
		</Card>
	);
};

export default CardProduct;
