import { Schema, model, models } from "mongoose";
import { randomUUID } from "crypto";

const StoreSchema = new Schema({
	name: {
		type: String,
		require: true,
	},
	description: {
		type: String,
		require: true,
	},
	location: {
		type: String,
		require: true,
	},
	storeId: {
		type: String,
		require: true,
		unique: true,
	},
	userId: { type: Schema.Types.ObjectId, ref: "users" },
	createdAt: { type: Date, default: Date.now() },
	updateAt: { type: Date, default: Date.now() },
});

export const Store =
	models.Stores || model("Stores", StoreSchema);
