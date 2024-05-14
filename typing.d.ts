export type UserProps = {
	name: string;
	email: string;
	username: string;
	password: string;
};

export type INewUser = {
	name: string;
	email: string;
	username: string;
	password: string;
	profile: URL;
	userId: string;
};
export type IUser = {
	email: string;
	password: string;
};

export type ISavedUser = {
	id: string;
	name: string;
	username: string;
	email: string;
	profile: string;
	userId: string;
};

interface userProps {
	userId: string;
	name: string;
	email: string;
	image: string;
	emailVerified?: boolean | null; // Assuming emailVerified can be boolean or null
}
export interface CategoryType {
	_id: string;
	categoryName: string;
	userId: string;
	createdAt: string;
	updateAt: string;
	__v: number;
}

interface ProductType {
	updatedAt: string;
	_id: string;
	title: string;
	description: string;
	price: string;
	image: string;
	category: CategoryType;
	createdAt: string;
	updateAt: string;
	location: string;
	freeDelivery: boolean;
	deliveryFee: null | number;
	stock: number;
	sellerId: string;
	SuperDeals: number;
	__v: number;
}
