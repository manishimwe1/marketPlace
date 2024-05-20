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

export const createStore = async (
	dataProps: z.infer<typeof createStoreSchema>,
) => {
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
		const data: IStore = {
			...dataProps,
			userId: user._id as string,
		};
		const store = await Store.create(data);

		revalidatePath("/dashboard/shop");
		return JSON.stringify(JSON.parse(store));
	} catch (error) {}
};
