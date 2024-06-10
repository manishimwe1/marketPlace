import { cn } from "@/lib/utils";
import { useMediaQuery } from "@react-hook/media-query";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

import { Dispatch, SetStateAction } from "react";
import { ProductType } from "@/typing";
import { Loader2, Star, X } from "lucide-react";
import Image from "next/image";
import Loader from "./Loader";
import { TicketIcon } from "@heroicons/react/24/outline";
import {
	StarIcon,
	TagIcon,
} from "@heroicons/react/24/solid";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";

export function ShoppingModal({
	open,
	setOpen,
	product,
}: {
	open: boolean;
	product: ProductType;
	setOpen: Dispatch<SetStateAction<boolean>>;
}) {
	if (!product) {
		return <Loader />;
	}
	const isDesktop = useMediaQuery("(min-width: 768px)");

	if (isDesktop) {
		const data = [1, 2, 3, 4, 5, 6];
		return (
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger asChild>
					<div className='flex items-center justify-center absolute top-0 right-0 p-1'>
						<X className='h-8 w-8 text-purple-200' />
					</div>
				</DialogTrigger>
				<DialogContent
					className='sm:max-w-[80%] h-fit py-10 bg-slate-200 !border-white/10
				'>
					<div className='grid grid-cols-3 gap-4 h-full w-full'>
						<div className='w-full h-full'>
							{product.image ? (
								<Image
									src={product.image}
									alt={product.title}
									width={300}
									height={0}
									className='object-contain'
								/>
							) : (
								<Loader2 className='animate-spin h-8 w-8 text-purple-500' />
							)}
							<div className='w-full  py-2 '>
								<Carousel>
									<CarouselContent className='w-full h-full bg-gradient-to-tl from-purple-100 via-fuchsia-100 to-violet-100'>
										{data.map(
											(_, i) => (
												<CarouselItem
													className='basis-1/6 h-full '
													key={i}>
													<div className='w-full h-full'>
														<Image
															src={
																product.image
															}
															alt={
																product.title
															}
															width={
																100
															}
															height={
																100
															}
															className='object-fill'
														/>
													</div>
												</CarouselItem>
											),
										)}
									</CarouselContent>
								</Carousel>
							</div>
						</div>
						<div className='w-full h-52  p-2 flex flex-col gap-4'>
							<div className='flex items-center gap-3'>
								<p className='font-extrabold text-4xl  !text-purple-800'>
									<span className='font-bold text-lg'>
										Rwf
									</span>
									{product.price}
								</p>
								<p className='text-muted-foreground line-through text-base align-baseline'>
									Rwf100
								</p>
								<p className='font-thin text-xl text-purple-400'>
									-20%
								</p>
							</div>
							<div className='flex gap-2 items-center'>
								<p className='p-0.5 flex items-center  bg-purple-700/30 text-purple-900/50 text-sm'>
									<TicketIcon className='h-4 w-4 mr-0.5 rotate-12 text-primary ' />
									WholeSale
								</p>
								<p className='text-sm text-purple-400/50'>
									{product.stock} pieces
								</p>
							</div>
							<div className='py-2 px-4 text-sm w-full bg-purple-600/40 flex rounded-lg text-black'>
								<TagIcon className='h-4 w-4 text-purple-900 mr-2' />
								{product.price - 100} off
								over
							</div>
							<p className='font-semibold text-base text-pretty text-stone-800'>
								{product.description}
							</p>
							<div className='flex gap-2 items-center'>
								<div className='flex gap-2 items-center'>
									<div className='flex gap-0.5'>
										<StarIcon className='h-4 w-4 text-purple-800' />
										<StarIcon className='h-4 w-4 text-purple-800' />
										<StarIcon className='h-4 w-4 text-purple-800' />
										<StarIcon className='h-4 w-4 text-purple-800' />
									</div>
									<p className='font-semibold text-sm text-purple-900/70'>
										4.1
									</p>
									<p className='font-thin  text-sm text-purple-400/50'>
										928 views
									</p>
									<Separator
										className='h-3 w-[0.5px] border border-purple-400/50'
										orientation='horizontal'
									/>
									<p className='font-thin  text-sm text-purple-400/50'>
										5,000 + solid
									</p>
								</div>
							</div>
						</div>
						<div className='w-full h-52  p-2 border rounded-3xl'>
							<div className='flex flex-col items-start'>
								<p className='font-semibold text-pretty text-stone-800 text-sm'>
									Delivery
								</p>
								<p className='font-semibold text-pretty text-stone-800 text-sm'>
									Shipping :
									{product.freeDelivery
										? "Free derively"
										: `Rwf${product.deliveryFee}`}
								</p>
							</div>
						</div>
					</div>
				</DialogContent>
			</Dialog>
		);
	}

	return (
		<Drawer open={open} onOpenChange={setOpen}>
			<DrawerTrigger asChild></DrawerTrigger>
			<DrawerContent className='w-full h-fit bg-gradient-to-tl from-purple-100 via-fuchsia-100 to-violet-100 flex items-center justify-center flex-col'>
				<div className='flex justify-between gap-2 w-full h-full'>
					<div className=' flex flex-col gap-3 items-center justify-center'>
						<Image
							src={product.image}
							alt={product.title}
							width={50}
							height={50}
							className='object-fill'
						/>
						<Image
							src={product.image}
							alt={product.title}
							width={50}
							height={50}
							className='object-fill'
						/>
						<Image
							src={product.image}
							alt={product.title}
							width={50}
							height={50}
							className='object-fill'
						/>
					</div>
					<div className=' flex items-center justify-center flex-1'>
						<Image
							src={product.image}
							alt={product.title}
							width={120}
							height={0}
							className='object-contain'
						/>
					</div>
				</div>

				<DrawerHeader className='w-full h-full'>
					<div className='w-full h-52  p-2 flex flex-col gap-4'>
						<div className='flex items-center gap-3'>
							<p className='font-extrabold text-4xl  !text-purple-800'>
								<span className='font-bold text-lg'>
									Rwf
								</span>
								{product.price}
							</p>
							<p className='text-muted-foreground line-through text-base align-baseline'>
								Rwf100
							</p>
							<p className='font-thin text-xl text-purple-400'>
								-20%
							</p>
						</div>
						<div className='flex gap-2 items-center'>
							<p className='p-0.5 flex items-center  bg-purple-700/30 text-purple-900/50 text-sm'>
								<TicketIcon className='h-4 w-4 mr-0.5 rotate-12 text-primary ' />
								WholeSale
							</p>
							<p className='text-sm text-purple-400/50'>
								{product.stock} pieces
							</p>
						</div>
						<div className='py-2 px-4 text-sm w-full bg-purple-600/40 flex rounded-lg text-black'>
							<TagIcon className='h-4 w-4 text-purple-900 mr-2' />
							{product.price - 100} off over
						</div>
						<p className='font-semibold text-base text-pretty text-stone-800'>
							{product.description}
						</p>
						<div className='flex gap-2 items-center'>
							<div className='flex gap-2 items-center'>
								<div className='flex gap-0.5'>
									<StarIcon className='h-4 w-4 text-purple-800' />
									<StarIcon className='h-4 w-4 text-purple-800' />
									<StarIcon className='h-4 w-4 text-purple-800' />
									<StarIcon className='h-4 w-4 text-purple-800' />
								</div>
								<p className='font-semibold text-sm text-purple-900/70'>
									4.1
								</p>
								<p className='font-thin  text-sm text-purple-400/50'>
									928 views
								</p>
								<Separator
									className='h-3 w-[0.5px] border border-purple-400/50'
									orientation='horizontal'
								/>
								<p className='font-thin  text-sm text-purple-400/50'>
									5,000 + solid
								</p>
							</div>
						</div>
					</div>
				</DrawerHeader>

				{/* <DrawerFooter className='pt-2'>
					<DrawerClose asChild>
						<Button variant='outline'>
							Cancel
						</Button>
					</DrawerClose>
				</DrawerFooter> */}
			</DrawerContent>
		</Drawer>
	);
}
