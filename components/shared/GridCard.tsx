import { IProduct } from "@/lib/actions/product.actions";
import Image from "next/image";

type Props = {
	deal: IProduct;
};

const GridCard = ({ deal }: Props) => {
	return (
		<div className='flex flex-col gap-2 p-2 bg-white rounded-t-3xl rounded-b-md'>
			<div className=' h-32 w-full rounded-lg relative '>
				<Image
					src={deal.image}
					fill
					alt={deal.title}
					className='object-contain rounded-lg'
				/>
			</div>
			<div className=' flex items-center justify-center gap-4'>
				<p className='text-sm text-primary font-bold whitespace-nowrap'>
					{deal.price}{" "}
					<span className='text-xs '>rwf</span>
				</p>
				<p className='bg-primary rounded-full text-sm font-semibold px-3 py-0.5 whitespace-nowrap'>
					-{deal.SuperDeals}% off
				</p>
			</div>
		</div>
	);
};

export default GridCard;
