import { z } from "zod";

export const formSchema = z.object({
	title: z
		.string()
		.min(4, "Must contains 4 characters")
		.max(50),
	description: z
		.string()
		.min(4, "Must contains 4 characters")
		.max(50),
	price: z.string().min(1),
	image: z.string().max(2200),
	location: z.string().min(4),
	freeDelivery: z.boolean(),
	deliveryFee: z.string(),
	stock: z.string(),
	category: z.string(),
});
