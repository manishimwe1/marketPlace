"use client";

import { z } from "zod";

export const SigninValidation = z.object({
	email: z.string().email(),
	password: z
		.string()
		.min(8, "password must be 8 chalacters")
		.max(50),
});
