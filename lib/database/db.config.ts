// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
import { MongoClient } from "mongodb";
import mongoose from "mongoose";

if (!process.env.MONGODB_URI) {
	throw new Error(
		'Invalid/Missing environment variable: "MONGODB_URI"',
	);
}

const uri = process.env.MONGODB_URI!;
const options = {};

let client;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
	//@ts-ignore
	if (!global._mongoClientPromise) {
		client = new MongoClient(uri, options);
		//@ts-ignore
		global._mongoClientPromise = client.connect();
	}
	//@ts-ignore
	clientPromise = global._mongoClientPromise;
} else {
	client = new MongoClient(uri, options);
	clientPromise = client.connect();
}

export default clientPromise;

export const connectToDB = async () => {
	try {
		if (mongoose.connection.readyState >= 1) {
			console.log("--->Mongodb already connected!!!");
		} else {
			await mongoose.connect(uri, options);
			console.log("--->Mongodb connected!!!");
		}
	} catch (error) {
		console.log(error);
	}
};
