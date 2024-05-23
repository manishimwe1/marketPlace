"use server";

import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@/lib/auth";
import { connectToDB } from "@/lib/database/db.config";
import { Product } from "@/lib/database/models/product.model";
import { Store } from "@/lib/database/models/store.model";
import { ICategory, ProductType } from "@/typing";
import { revalidatePath } from "next/cache";

export type StoreType = {
	_id: string;
	name: string;
	description: string;
	location: string;
	image: string;
	userId: string;
	createdAt: string;
};
export const getStore = async () => {
	const session = await auth();
	try {
		await connectToDB();
		const user = await getUserById(
			session?.user.email || "",
		);
		if (!user) {
			throw new Error(
				"Unthorized please log in!!!!!",
			);
		}

		const store: StoreType[] = await Store.find({
			userId: user._id,
		}).sort({
			createAt: "asc",
		});

		return JSON.parse(JSON.stringify(store));
	} catch (error) {}
};

export const getStoreById = async (id: string) => {
	try {
		await connectToDB();

		const store: StoreType[] = await Store.find({
			_id: id,
		}).sort({
			createAt: "asc",
		});

		return JSON.parse(JSON.stringify(store));
	} catch (error) {}
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

		const newProduct = await Product.create(product);
		if (!newProduct) {
			console.log(
				"there is error in creating product",
			);
			return;
		}
		const results = JSON.parse(
			JSON.stringify(newProduct),
		);

		revalidatePath(
			`/dashboard/shop/${product.storeId}`,
		);
		return results;
	} catch (error) {
		console.log(error);
	}
};
