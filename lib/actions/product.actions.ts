"use server";

import { revalidatePath } from "next/cache";
import { auth } from "../auth";
import { connectToDB } from "../database/db.config";
import { ICategory } from "../database/models/category.model";
import { Product } from "../database/models/product.model";
import { getCategoryByID } from "./category.actions";
import { getUserById } from "./user.actions";

export type ProductType = {
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

		const category: ICategory = await getCategoryByID(
			product.category,
		);
		if (!category) {
			return console.log(
				"no category found try again",
			);
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
			category: category._id as string,
			sellerId: seller._id as string,
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
		// console.log("PRODUCT", product);

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
export const getAllProductCategory = async () => {
	try {
		await connectToDB();

		const product = await Product.find()
			.populate("category")
			.select("category")
			.sort({
				_id: "desc",
			});

		// console.log("PRODUCT", product);

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

export const getProductById = async (Id: string) => {
	if (!Id) {
		return console.log("There is no id");
	}

	try {
		await connectToDB();

		const product = await Product.findById({ _id: Id });

		return JSON.parse(JSON.stringify(product));
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

export const getProductByCategory = async (
	categoryId: string,
) => {
	try {
		const product = await Product.find({
			category: categoryId,
		}).populate("category");
		if (!product)
			return console.log(
				"there is no product by this category:",
				categoryId,
			);
		return JSON.parse(JSON.stringify(product));
	} catch (error) {
		console.log(error);
	}
};
