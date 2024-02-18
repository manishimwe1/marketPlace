"use client";

import { z } from "zod";

export const SignupValidation = z.object({
	name: z.string().min(2, "").max(100),
	username: z.string().min(2).max(50),
	email: z.string().email(),
	password: z
		.string()
		.min(8, "password must be 8 chalacters")
		.max(50),
});
