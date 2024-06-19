import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import {
	Dispatch,
	SetStateAction,
	useEffect,
	useState,
} from "react";
import { getProductByIdAction } from "../../_actions/getData";
import { ProductType } from "@/typing";
import { Badge, Loader, Pencil } from "lucide-react";
import Link from "next/link";
import { cn, truncateString } from "@/lib/utils";
import {
	Button,
	buttonVariants,
} from "@/components/ui/button";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import CountdownTimer from "@/components/shared/counterDown";
import InfoProductPageSkeleton from "../skeleton/infoProductPageSkeleton";

const InfoProductPage = ({
	IsOpen,
	setIsOpen,
	id,
}: {
	id: string;
	IsOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
	const [product, setProduct] = useState<
		ProductType | undefined
	>();
	const [isPending, setisPending] = useState(false);

	useEffect(() => {
		const getData = async () => {
			setisPending(true);
			getProductByIdAction(id)
				.then((product: ProductType) => {
					console.log(product, ">>>Product");
					setProduct(product);
				})
				.catch((error) => {
					console.log(error);
				})
				.finally(() => setisPending(false));
		};

		getData();
	}, [id, IsOpen]);
	if (!product) {
		console.log(product);
	}

	return (
		<Sheet
			open={IsOpen}
			onOpenChange={() => {
				setIsOpen(!IsOpen);
				setProduct(undefined);
			}}>
			<SheetContent className='bg-gradient h-[calc(100vh)] !absolute border-white/20 bottom-0 text-purple-200 !px-2 !w-full'>
				{isPending ? (
					<div className=' w-full flex flex-col justify-center items-center '>
						<InfoProductPageSkeleton />
					</div>
				) : (
					<div className=' w-full h-full flex '>
						{product ? (
							<div className='w-full relative h-full flex  flex-col  text-stone-900  rounded-3xl  py-10'>
								<Link
									href={`/dashboard/shop/edit-product/${id}`}
									className={cn(
										"absolute top-4 right-4 ring-2 ring-purple-500/30 hover:!bg-gray-900 !px-2 z-20 bg-white/20 ",
										buttonVariants({
											variant:
												"ghost",
										}),
									)}>
									<Pencil className='text-purple-400 h-5 w-5' />
								</Link>

								<div className=' border border-black lg:flex-1 relative rounded-3xl flex lg:p-5 bg-gradient shadow-sm shadow-purple-500/30 h-fit'>
									<div className='lg:h-[100%] h-[200px] w-full relative  bg-purple-50/20 rounded-3xl'>
										<Image
											src={
												product.image
											}
											alt={
												product.title
											}
											fill
											className='object-contain rounded-3xl '
										/>
									</div>
								</div>
								<div className=' flex flex-col gap-1 w-full px-4 text-black-2'>
									<div className='flex py-5 justify-between  items-center gap-3  w-full'>
										<h2 className='text-3xl font-bold text-purple-200 capitalize'>
											{truncateString(
												product.title,
												50,
											)}
										</h2>

										<div className='flex px-3 py-1 bg-gray-900 w-fit rounded-full gap-2 mt-4'>
											<p className='text-lg font-bold text-purple-100'>
												{
													product.price
												}
											</p>{" "}
											Rwf
										</div>
									</div>
									<div className='w-full px-2 flex justify-end'>
										<p className='text-xs text-balance'>
											{truncateString(
												product.description,
												80,
											)}
										</p>
									</div>
									<Separator className='h-1 w-full mt-5 mb-4 rounded-r-lg bg-purple-500/10' />
									<div className='w-full flex flex-col justify-between  rounded-r-3xl px-3 items-start  overflow-hidden'>
										<p className=' font-medium text-black-2  text-sm text-nowrap'>
											Aproval time for
											publishing your
											product
										</p>
										<div className='boder h-10 flex gap-2 items-center p-2 justify-end w-full'>
											<Loader className='animate-spin text-purple-400' />
											<CountdownTimer
												days={5}
											/>
											<p className='text-muted-foreground text-sm '>
												(In min)
											</p>
										</div>
									</div>
									<div className='flex flex-col justify-center'>
										<Button
											variant={
												"link"
											}>
											Check how is it
											going
										</Button>
									</div>
								</div>
							</div>
						) : (
							<div className=' w-full flex flex-col justify-center items-center '>
								<Loader className='animate-spin' />
							</div>
						)}
					</div>
				)}
			</SheetContent>
		</Sheet>
	);
};

export default InfoProductPage;
