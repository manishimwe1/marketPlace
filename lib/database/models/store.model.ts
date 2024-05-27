import { Schema, model, models } from "mongoose";
import { randomUUID } from "crypto";

const StoreSchema = new Schema({
	name: {
		type: String,
		require: true,
		unique: true,
	},
	description: {
		type: String,
		require: true,
		unique: true,
	},
	location: {
		type: String,
		require: true,
		unique: true,
	},
	storeId: {
		type: "UUID",
		default: () => randomUUID(),
	},
	userId: { type: Schema.Types.ObjectId, ref: "users" },
	createdAt: { type: Date, default: Date.now() },
	updateAt: { type: Date, default: Date.now() },
});

export const Store =
	models.stories || model("stories", StoreSchema);
