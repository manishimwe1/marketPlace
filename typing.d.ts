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
