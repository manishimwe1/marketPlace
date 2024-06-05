"use server";

import { connectToDB } from "../database/db.config";
import User from "../database/models/user.model";

export const getUserById = async (email: string) => {
	try {
		await connectToDB();

		const user = await User.findOne({
			email,
		});
		if (!user) {
			console.log("error in creating user");
			return;
		}
		return JSON.parse(JSON.stringify(user));
	} catch (error) {
		console.log(error);
	}
};
