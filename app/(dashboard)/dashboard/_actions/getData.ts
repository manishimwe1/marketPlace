"use server";

import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@/auth";
import { connectToDB } from "@/lib/database/db.config";
import { Product } from "@/lib/database/models/product.model";
import { Store } from "@/lib/database/models/store.model";
import { IStore } from "@/typing";

export const getStore = async () => {
	const session = await auth();
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

		const store: IStore[] = await Store.find({
			userId: user._id,
		}).sort({
			createAt: -1,
		});

		// console.log("STORE", store);

		return JSON.parse(JSON.stringify(store));
	} catch (error) {}
};

export const getStoreById = async (id: string) => {
	try {
		await connectToDB();

		const store: IStore[] = await Store.find({
			storeId: id,
		}).sort({
			createAt: "asc",
		});

		if (!store) {
			console.log("there is no store found");
		}

		return JSON.parse(JSON.stringify(store));
	} catch (error) {
		console.log(error);
	}
};

export const getAllProductInStore = async (
	storeId: string,
) => {
	try {
		await connectToDB();
		if (!storeId) return;
		const product = await Product.find({
			storeId,
		}).sort({
			createdAt: "desc",
		});
		// .select(["title", "description",]);

		if (!product)
			return console.log(":::No poduct found ");

		return JSON.parse(JSON.stringify(product));
	} catch (error: any) {
		console.log(error);
	}
};
