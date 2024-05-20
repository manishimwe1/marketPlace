"use server";

import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@/lib/auth";
import { connectToDB } from "@/lib/database/db.config";
import {
	IStore,
	Store,
} from "@/lib/database/models/store.model";
import { createStoreSchema } from "@/lib/validation";
import { revalidatePath } from "next/cache";
import { z } from "zod";

type StoreType = {
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
