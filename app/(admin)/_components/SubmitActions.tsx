"use client";

import { Button } from "@/components/ui/button";
import { ProductType } from "@/typing";
import React, { useState } from "react";
import { provingProduct } from "../_actions/provingProduct";
import { useToast } from "@/components/ui/use-toast";
import { redirect, useRouter } from "next/navigation";

type Props = { product: ProductType };

const SubmitActions = ({ product }: Props) => {
	const [isPending, setisPending] = useState(false);
	const { toast } = useToast();
	const router = useRouter();

	return (
		<>
			{product ? (
				<form
					className='flex items-center w-full justify-around mt-10'
					onClick={async () => {
						setisPending(true);
						if (!product._id) return;
						provingProduct(product._id)
							.then(() => {
								toast({
									title: "Successfull updated Product",
								});

								setisPending(false);
							})
							.catch((error: any) => {
								toast({
									title: "ERROR",
									variant: "destructive",
									description:
										error.message,
								});
							})
							.finally(() =>
								router.push("/admin"),
							);
					}}>
					<Button
						className='ScaleAnimation'
						disabled={isPending}>
						{isPending
							? "Publishing..."
							: "Publish"}
					</Button>
					<Button className='bg-slate-300 hover:bg-stone-500  ScaleAnimation'>
						Draft
					</Button>
				</form>
			) : null}
		</>
	);
};

export default SubmitActions;
