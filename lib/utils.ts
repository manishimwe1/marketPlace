import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { generateReactHelpers } from "@uploadthing/react/hooks";
import { ProductType } from "@/typing";

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

export function removeDuplicates(
	items: ProductType[],
): ProductType[] {
	const categoriesMap: Map<string, ProductType> =
		new Map();

	// Iterate through each item
	items.forEach((item) => {
		const categoryId = item.category._id;

		// If the category is not already in the map, add it
		if (!categoriesMap.has(categoryId)) {
			categoriesMap.set(categoryId, item);
		}
	});

	// Convert Map values to array and return
	return Array.from(categoriesMap.values());
}
