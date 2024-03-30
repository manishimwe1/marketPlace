import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { generateReactHelpers } from "@uploadthing/react/hooks";

// import type { OurFileRouter } from "@/app/api/uploadthing/core";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const convertFileToUrl = (file: File) =>
	URL.createObjectURL(file);

// export const { useUploadThing, uploadFiles } =
// 	generateReactHelpers<OurFileRouter>();

export function truncateString(
	inputString: string,
	maxLength: number,
): string {
	if (inputString.length <= maxLength) {
		return inputString;
	} else {
		return (
			inputString.substring(0, maxLength - 3) + "..."
		);
	}
}
