"use server";

import { revalidatePath } from "next/cache";
import { auth } from "../auth";
import { connectToDB } from "../database/db.config";
import { Product } from "../database/models/product.model";
import { getUserById } from "./user.actions";
import {
	getCategoryByID,
	getCategoryByName,
} from "./category.actions";
import {
	Category,
	ICategory,
} from "../database/models/category.model";

export type IProduct = {
	image: string;
	title: string;
	description: string;
	price: string;
	category?: string;
	location: string;
	freeDelivery: boolean;
	deliveryFee: string;
	stock: string;
	sellerId?: string;
	SuperDeals?: string;
};

const populatecategory = (query: any) =>
	query.populate({
		path: "category",
		model: Category,
		select: "_id categoryName",
	});

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
		if (!product.category) {
			console.log(product);

			return console.log("there is no product");
		}
		// console.log(sellerId._id);

		const category: ICategory = await getCategoryByID(
			product.category,
		);
		if (!category) {
			return console.log(
				"no category found try again",
			);
		}
		const data = {
			...product,
			category: category._id as string,
			sellerId: seller._id as string,
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

		const product = await Product.find()
			.populate("category")
			.sort({
				_id: "desc",
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

export const getSuperDeals = async () => {
	const superDealAmount = 20;
	try {
		await connectToDB();

		const superDeals = await Product.find({
			SuperDeals: superDealAmount,
		}).sort({ _id: "descending" });
		if (!superDeals) {
			console.log("can't find any superdeals ");
		}
		return JSON.parse(JSON.stringify(superDeals));
	} catch (error) {
		console.log(error);
	}
};
