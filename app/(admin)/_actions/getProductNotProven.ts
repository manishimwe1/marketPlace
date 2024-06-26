"use server";

import { auth } from "@/auth";
import { adminUser } from "@/lib/adminUser";
import { connectToDB } from "@/lib/database/db.config";
import { Product } from "@/lib/database/models/product.model";
import { ProductType } from "@/typing";

export const getProductNotProven = async () => {
	const session = await auth();
	if (!session?.user) {
		throw new Error("Unthorize");
	}
	if (!adminUser) return;

	if (
		adminUser.id !== session.user.id ||
		adminUser.email !== session.user.email ||
		adminUser.name !== session.user.name
	)
		return;

	try {
		connectToDB();

		const allProduct: ProductType[] =
			await Product.find({
				provedByAdmin: false,
			});

		if (!allProduct)
			throw new Error("Error in getting product");

		return JSON.parse(JSON.stringify(allProduct));
	} catch (error: any) {
		console.log(
			"Error in getting product",
			error.message,
		);
	}
};
