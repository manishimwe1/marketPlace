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
	price: z.number(),
	image: z.string(),
	location: z.string(),
	freeDelivery: z.boolean(),
	deliveryFee: z.number(),
	stock: z.number(),
	category: z.string(),
});
