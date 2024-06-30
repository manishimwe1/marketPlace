"use server";

import { auth } from "@/auth";
import { adminUser } from "@/lib/adminUser";
import { connectToDB } from "@/lib/database/db.config";
import { Product } from "@/lib/database/models/product.model";
import { ProductType } from "@/typing";
import { revalidatePath } from "next/cache";

export const provingProduct = async (id: string) => {
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

		const product = await Product.updateOne(
			{
				_id: id,
			},
			{ provedByAdmin: true },
		);
		// console.log("PRoduct", product);

		revalidatePath("/admin");
	} catch (error: any) {
		console.log(
			"Error in getting product",
			error.message,
		);
	}
};
