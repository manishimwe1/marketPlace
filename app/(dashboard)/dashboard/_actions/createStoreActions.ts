"use server";

import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@/auth";
import { connectToDB } from "@/lib/database/db.config";
import { Store } from "@/lib/database/models/store.model";
import { createStoreSchema } from "@/lib/validation";
import { IStore } from "@/typing";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { randomUUID } from "crypto";
import { redirect } from "next/navigation";

export const createStore = async (
	dataProps: z.infer<typeof createStoreSchema>,
) => {
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
		const data = {
			...dataProps,
			storeId: randomUUID().toString(),
			userId: user._id as string,
		};
		const store = await Store.create(data);

		revalidatePath("/dashboard/shop");
		revalidatePath("/");
		return JSON.stringify(JSON.parse(store));
	} catch (error) {
		console.log(error);
	}
};
