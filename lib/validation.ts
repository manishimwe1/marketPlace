import { z } from "zod";

export const createProductSchemma = z.object({
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

	// frontView: z.string(),
	// backView: z.string(),
	// sideView: z.string(),
	// topView: z.string(),
	// bottomView: z.string(),
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
	phoneOfOwner: z.coerce.number().min(10, {
		message: "char must equal to 10 charcter",
	}),
});
export const signInSchema = z.object({
	Email: z.string().email(),
	password: z
		.string()
		.min(8, "Must contains 8 characters")
		.max(50),
});
