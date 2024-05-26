import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { ICategory } from "@/typing";

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
	items: ICategory[],
): ICategory[] {
	const categoriesMap: Map<string, ICategory> = new Map();

	// Iterate through each item
	items.forEach((item: ICategory) => {
		const categoryId = item.category._id;

		// If the category is not already in the map, add it
		if (!categoriesMap.has(categoryId)) {
			categoriesMap.set(categoryId, item);
		}
	});

	// Convert Map values to array and return
	return Array.from(categoriesMap.values());
}

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#7986AC" offset="20%" />
      <stop stop-color="#68769e" offset="50%" />
      <stop stop-color="#7986AC" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#7986AC" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

export function getFirstWord(str: string) {
	// Split the string into an array of words
	const words = str.split(" ");

	// Return the first word, or an empty string if the input is empty
	return words.length > 0 ? words[0] : "";
}
