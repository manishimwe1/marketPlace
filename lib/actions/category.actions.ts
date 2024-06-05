"use server";

import { CategoryType } from "@/typing";
import { auth } from "@/auth";
import { connectToDB } from "../database/db.config";
import { Category } from "../database/models/category.model";
import { getUserById } from "./user.actions";
import { revalidatePath } from "next/cache";

export const saveCategory = async (
	categoryName: string,
) => {
	const session = await auth();
	const path = "saler/product/create-product";
	try {
		await connectToDB();

		const user = await getUserById(
			session?.user?.email || "",
		);
		if (!user) {
			throw new Error(
				"Unthorized please log in!!!!!",
			);
		}

		const data = {
			categoryName,
			userId: user._id,
		};
		const category = await Category.create(data);
		if (!category) {
			console.log(
				"there is error in creating category",
			);
			return;
		}
		const results = JSON.parse(
			JSON.stringify(category),
		);

		revalidatePath(path);
		return results;
	} catch (error) {
		console.log(error);
	}
};

export const getAllCategories = async () => {
	try {
		await connectToDB();
		const categories = await Category.find();
		if (!categories) {
			throw new Error("there is no categories");
		}

		return JSON.parse(JSON.stringify(categories));
	} catch (error) {
		console.log(error);
	}
};

export const getCategoryByName = async (
	categoryName: string,
) => {
	try {
		await connectToDB();

		const category = await Category.findOne({
			categoryName,
		});
		if (!category) {
			throw new Error("I cant find any Category");
		}
		return JSON.parse(JSON.stringify(category));
	} catch (error) {
		console.log(error);
	}
};
export const getCategoryByID = async (
	categoryName: string,
) => {
	try {
		await connectToDB();

		const category = await Category.findOne({
			_id: categoryName,
		});
		if (!category) {
			throw new Error("I cant find any  CategoryId");
		}
		return JSON.parse(JSON.stringify(category));
	} catch (error) {
		console.log(error);
	}
};
