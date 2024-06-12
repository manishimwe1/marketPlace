import React, { Dispatch, SetStateAction } from "react";
import {
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "../ui/form";
import CreateProductFormCard from "@/app/(dashboard)/dashboard/_components/shared/CreateProductFormCard";
import { Control } from "react-hook-form";
import { createProductSchemma } from "@/lib/validation";
import { z } from "zod";

const ViewCard = ({
	control,
	view,
	setView,
}: {
	view: "front" | "back" | "bottom" | "side" | "top";
	control:
		| Control<z.infer<typeof createProductSchemma>>
		| undefined;
	setView: Dispatch<SetStateAction<File | undefined>>;
}) => {
	return (
		<FormField
			//@ts-ignore
			control={control}
			// name={`${view}View`}
			render={({ field }) => (
				<FormItem className='h-full'>
					<FormControl className='h-full'>
						<CreateProductFormCard
							imgsrc={`/views/${view}.png`}
							title={view}
							setView={setView}
							onFieldChange={field.onChange}
							{...field}
						/>
					</FormControl>

					<FormMessage className='text-xs' />
				</FormItem>
			)}
		/>
	);
};

export default ViewCard;
