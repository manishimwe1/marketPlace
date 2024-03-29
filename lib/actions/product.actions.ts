"use server";

import { redirect } from "next/navigation";
import { connectToDB } from "../database/db.config";
import { Product } from "../database/models/product.model";

export type IProduct = {
	image: string;
	title: string;
	description: string;
	price: string;
	category: string;
	location: string;
	freeDelivery: boolean;
	deliveryFee: string;
	stock: string;
};

export const createProduct = async (product: IProduct) => {
	try {
		await connectToDB();
		const newProduct = await Product.create(product);
		if (!newProduct) {
			throw new Error(
				"there is error in creating product",
			);
		}

		return JSON.parse(JSON.stringify(newProduct));
	} catch (error) {
		console.log(error);
	}
};

export const getAllProductById = async (
	userId: string | undefined,
) => {
	if (!userId) {
		return redirect("/sign-in");
	}

	try {
		await connectToDB();

		const product = await Product.findById({});
	} catch (error) {}
};
