import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createProductSchemma } from "@/lib/validation";
import React from "react";
import { Control, ControllerProps } from "react-hook-form";
import { z } from "zod";
type FormPropsType = {
	control:
		| Control<z.infer<typeof createProductSchemma>>
		| undefined;
	render: (props: { field: any }) => React.ReactNode;
	name: keyof z.infer<typeof createProductSchemma>;
	formLabel?: string;
	className?: string;
};
const CustomField = ({
	control,
	render,
	name,
	formLabel,
	className,
}: FormPropsType) => {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className={className}>
					{formLabel && (
						<FormLabel>{formLabel}</FormLabel>
					)}
					<FormControl>
						{render({ field })}
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

export default CustomField;
