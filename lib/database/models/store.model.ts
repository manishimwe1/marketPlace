import { Schema, model, models } from "mongoose";

export type IStore = {
	name: string;
	description: string;
	location: string;
	_id?: string;
	createdAt?: Date;
	updateAt?: Date;
	userId: string;
};

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
	userId: { type: Schema.Types.ObjectId, ref: "users" },
	createdAt: { type: Date, default: Date.now() },
	updateAt: { type: Date, default: Date.now() },
});

export const Store =
	models.stories || model("stories", StoreSchema);
