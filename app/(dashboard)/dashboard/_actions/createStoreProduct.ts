"use server";

import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@/auth";
import { connectToDB } from "@/lib/database/db.config";
import { Product } from "@/lib/database/models/product.model";
import { ProductType } from "@/typing";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createProduct = async (
	product: ProductType,
) => {
	const user = await auth();
	try {
		await connectToDB();

		const seller = await getUserById(
			user?.user.email || "",
		);
		if (!seller) {
			throw new Error(
				"Unthorized please log in!!!!!",
			);
		}
		if (!product.category) {
			return console.log("there is no product");
		}

		const data = {
			image: product.image,
			title: product.title,
			description: product.description,
			price: product.price,
			location: product.location,
			freeDelivery: product.freeDelivery,
			deliveryFee: product.deliveryFee,
			SuperDeals: product.SuperDeals,
			stock: product.stock,
			category: product.category,
			sellerId: seller._id as string,
			storeId: product._id,
			provedByAdmin: false,
		};

		const newProduct = await Product.create(data);
		if (!newProduct) {
			console.log(
				"there is error in creating product",
			);
			return;
		}
		const results = JSON.parse(
			JSON.stringify(newProduct),
		);
		revalidatePath(`/dashboard/shop/${product._id}`);
		return results;
	} catch (error) {
		console.log(error);
	} finally {
		redirect(`/dashboard/shop/${product._id}`);
	}
};
