import { Schema, model, models } from "mongoose";

export type ICategory = {
	categoryName: string;
	_id: string;
	createdAt: Date;
	updateAt: Date;
};

const categorySchema = new Schema({
	categoryName: {
		type: String,
		require: true,
		unique: true,
	},
	userId: { type: Schema.Types.ObjectId, ref: "users" },
	createdAt: { type: Date, default: Date.now() },
	updateAt: { type: Date, default: Date.now() },
});

export const Category =
	models.Category || model("Category", categorySchema);
