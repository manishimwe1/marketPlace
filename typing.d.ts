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
	createdAt: Date;
	updateAt: Date;
	__v: number;
}

interface ProductType {
	title: string;
	description: string;
	price: number;
	image: string;
	category: string;
	updatedAt?: string;
	_id?: string;
	createdAt?: string;
	updateAt?: string;
	location: string;
	freeDelivery: boolean;
	provedByAdmin?: boolean;
	deliveryFee: null | number;
	stock: number;
	sellerId?: string;
	storeId: string;
	SuperDeals: number;
}

export type ICategory = {
	_id: string;
	categoryName: string;
};

export type IStore = {
	name: string;
	description: string;
	location: string;
	phoneOfOwner: string;
	_id?: string;
	createdAt?: Date;
	updateAt?: Date;
	userId: string;
	storeId?: string;
};
