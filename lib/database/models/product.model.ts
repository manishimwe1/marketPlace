import { Document, Schema, model, models } from "mongoose";
import User from "./user.model";

export interface IProduct extends Document {
	_id: string;
	title: string;
	description: string;
	price: number;
	image: string | undefined;
	category: string;
	createdAt: Date;
	updateAt: Date;
	location: string;
	freeDelivery: boolean;
	deliveryFee: number;
	stock: number;
	sellerId: {
		_id: string;
		email: string;
		name: string;
		image: string;
	};
}

const populateUser = (query: any) =>
	query.populate({
		path: "author",
		model: User,
		select: "_id email name image",
	});

const ProductSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	image: {
		type: String,
	},
	category: {
		type: Schema.Types.ObjectId,
		ref: "categories",
	},
	createdAt: { type: Date, default: new Date() },
	updatedAt: { type: Date, default: new Date() },
	location: { type: String },
	freeDelivery: { type: Boolean },
	deliveryFee: { type: Number },
	stock: { type: Number },
	sellerId: { type: Schema.Types.ObjectId, ref: "users" },
	SuperDeals: { type: Number },
});

export const Product =
	models.products || model("products", ProductSchema);
