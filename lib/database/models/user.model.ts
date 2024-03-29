import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
	userId: { type: String, require: true, unique: true },
	email: { type: String, require: true, unique: true },
	name: { type: String, require: true, unique: true },
	image: { type: String, require: true },
});

const User = models.users || model("users", UserSchema);

export default User;
