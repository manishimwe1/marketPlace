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
import { Loader } from "lucide-react";

const InfoProductPage = ({
	IsOpen,
	setIsOpen,
	id,
}: {
	id: string;
	IsOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
	console.log(id);

	const [product, setProduct] = useState<
		ProductType | undefined
	>();
	useEffect(() => {
		const getData = async () => {
			getProductByIdAction(id).then((product) => {
				console.log(product, ">>>Product");
				setProduct(product);
			});
		};

		getData();
	}, [id]);
	if (!product) {
		console.log(product);
	}

	return (
		<Sheet
			open={IsOpen}
			onOpenChange={() => setIsOpen(!IsOpen)}>
			<SheetTrigger></SheetTrigger>
			<SheetContent className='bg-gradient h-[calc(100vh)] !absolute border-white/20 bottom-0 text-purple-200'>
				<SheetHeader>
					<SheetTitle>
						{product ? (
							<p>{product.title}</p>
						) : (
							<div className='w-full h-full flex items-center justify-center p-20'>
								<Loader className='animate-spin text-purple-200' />
							</div>
						)}
					</SheetTitle>
					<SheetDescription>
						This action cannot be undone. This
						will permanently delete your account
						and remove your data from our
						servers.
					</SheetDescription>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	);
};

export default InfoProductPage;
