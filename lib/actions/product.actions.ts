"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { connectToDB } from "../database/db.config";
import { Product } from "../database/models/product.model";
import { getCategoryByID } from "./category.actions";
import { getUserById } from "./user.actions";
import { ICategory, ProductType } from "@/typing";

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

		console.log("PRODUCT>>>>>>>>>>>>>>>>", product);

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

export const getCategoryName = async (name: string) => {
	console.log("Here!!!!!!!!");

	const categoryNames: ICategory[] =
		await getAllProductCategory();
	if (categoryNames) {
		const categoryName = categoryNames.filter(
			(categoryName) =>
				categoryName.categoryName === `${name}`,
		);

		if (categoryName)
			return console.log(
				"CATEGORYNAME",
				categoryName,
			);
	}
};
