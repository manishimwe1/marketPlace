"use server";

import { revalidatePath } from "next/cache";
import { auth } from "../auth";
import { connectToDB } from "../database/db.config";
import { Product } from "../database/models/product.model";
import { getUserById } from "./user.actions";

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
	sellerId: string;
};

export const createProduct = async (product: IProduct) => {
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
		// console.log(sellerId._id);

		const data = {
			...product,
			sellerId: seller._id,
		};

		// console.log(data);

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

		revalidatePath("/");
		return results;
	} catch (error) {
		console.log(error);
	}
};

export const getAllProduct = async () => {
	try {
		await connectToDB();

		const product = await Product.find().sort({
			createdAt: "desc",
		});

		if (!product) {
			console.log("error in getting Product");
			return;
		}

		revalidatePath("/");
		return JSON.parse(JSON.stringify(product));
	} catch (error) {
		console.log(error);
	}
};

export const getAllProductById = async (Id: string) => {
	if (!Id) {
		return console.log("There is no id");
	}

	try {
		await connectToDB();

		const product = await Product.findById({ _id: Id });

		return JSON.parse(JSON.stringify(product));
		// const seller = await User.findById(userId);
		// if (!seller) {
		// 	console.log("error in getting userId");
		// 	return;
		// }
		// const sellerId = seller._id;
		// const product = await Product.findOne({ sellerId });

		// if (!product) {
		// 	return console.log(
		// 		"error in getting product by seller id",
		// 	);
		// }
	} catch (error) {
		console.log(error);
	}
};
