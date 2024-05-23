import { z } from "zod";

export const formSchema = z.object({
	title: z
		.string()
		.min(4, "Must contains 4 characters")
		.max(2200),
	description: z
		.string()
		.min(4, "Must contains 4 characters")
		.max(2200),
	price: z.coerce.number(),
	image: z.string().max(2200),
	location: z.string().min(4),
	freeDelivery: z.boolean(),
	deliveryFee: z.coerce.number(),
	stock: z.coerce.number(),
	category: z.string(),
	SuperDeals: z.coerce.number(),
});
export const createStoreSchema = z.object({
	name: z
		.string()
		.min(4, "Must contains 4 characters")
		.max(2200),
	description: z
		.string()
		.min(4, "Must contains 20 characters")
		.max(2200),
	image: z.string().max(2200),
	location: z.string().min(4),
});
export const signInSchema = z.object({
	Email: z.string().email(),
	password: z
		.string()
		.min(8, "Must contains 8 characters")
		.max(50),
});
