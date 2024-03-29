"use server";

import { redirect } from "next/navigation";
import { connectToDB } from "../database/db.config";
import { Product } from "../database/models/product.model";
import User from "../database/models/user.model";
import { getUserById } from "./user.actions";
import { auth } from "../auth";

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
				"there is error in finding sellerId",
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

		return results;
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
