"use server";

import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@/lib/auth";
import { connectToDB } from "@/lib/database/db.config";
import { Product } from "@/lib/database/models/product.model";
import { Store } from "@/lib/database/models/store.model";

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

export const getAllProductInStore = async (
	storeId: string,
) => {
	try {
		if (!storeId) return;
		await connectToDB();
		const product = await Product.find({
			storeId,
		}).sort({
			createdAt: "desc",
		});

		if (!product)
			return console.log(":::No poduct found ");

		return JSON.parse(JSON.stringify(product));
	} catch (error: any) {
		console.log(error);
	}
};
