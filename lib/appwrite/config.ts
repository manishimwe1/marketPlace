import {
	Account,
	Avatars,
	Databases,
	Storage,
	Client,
} from "appwrite";

export const appWriteConfig = {
	projectId: process.env.APPWRITE_PROJECT_ID!,
	url: process.env.APPWRITE_BASE_URL!,
	databaseId: process.env.APPWRITE_DATABASES_ID!,
	itemCollectionId:
		process.env.APPWRITE_ITEM_COLLECTIONS_ID!,
	StorageId: process.env.APPWRITE_STORAGE_ID!,
	userCollectionId:
		process.env.APPWRITE_USER_COLLECTIONS_ID!,
	SecretApiKey: process.env.APPWRITE_API_KEY!,
};

export const client = new Client();

client.setProject("65d0f1fac1004463e4b8");
client.setEndpoint("https://cloud.appwrite.io/v1");
client.setJWT(appWriteConfig.SecretApiKey); // Replace with your Appwrite API key
client.headers;

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
