import { Document, Schema, model, models } from "mongoose";
import { number } from "zod";

export interface IProduct extends Document {
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
}

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
		type: String,
		required: true,
	},
	createdAt: { type: Date, default: Date.now() },
	updateAt: { type: Date, default: Date.now() },
	location: { type: String },
	freeDelivery: { type: Boolean },
	deliveryFee: { type: Number },
	stock: { type: Number },
});

export const Product =
	models.Product || model("Product", ProductSchema);
