"use server";

import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@/lib/auth";
import { connectToDB } from "@/lib/database/db.config";
import { Store } from "@/lib/database/models/store.model";
import { revalidatePath } from "next/cache";

export const DeleteStoreAction = async (
	storeId: string,
) => {
	const session = await auth();
	try {
		await connectToDB();
		const user = await getUserById(
			session?.user.email || "",
		);
		if (!storeId) return;
		if (!user) {
			throw new Error(
				"Unthorized please log in!!!!!",
			);
		}
		await Store.deleteOne({
			storeId: storeId,
			userId: user._id,
		});
		revalidatePath("/dashboard/shop");
		console.log(">>>Done ", storeId);
	} catch (error) {
		console.log(error);
	}
};
