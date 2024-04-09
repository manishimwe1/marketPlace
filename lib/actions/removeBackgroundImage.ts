"use server";

import path from "path";
import axios from "axios";
import {
	RemoveBgResult,
	RemoveBgError,
	removeBackgroundFromImageUrl,
} from "remove.bg";
import fs from "fs";
export const removeBackgroundImage = async (
	url: string,
) => {
	console.log("Starting!!!!!!!!!!!!!!!!!!!!");

	const outputFile = path.join(
		__dirname,
		"img-removed-from-file.png",
	);
	try {
		const result: RemoveBgResult =
			await removeBackgroundFromImageUrl({
				url,
				apiKey: process.env
					.REMOVE_BG_IMAGE_API_KEY!,
				size: "regular",
				type: "person",
				outputFile,
				format: "png",
			});
		if (result) {
			console.log(
				"no bgimage found for ",
				outputFile,
			);
		}

		return result;
	} catch (error: any) {
		console.log(JSON.stringify(error), "this error");
	}
};

export const removeBgFromRapidApi = async (url: string) => {
	// const OPTIONS = {
	// 	url,
	// 	headers: { "A4A-CLIENT-APP-ID": "sample" },
	// 	rapidapi: {
	// 		url: "https://background-removal4.p.rapidapi.com/v1/results",
	// 		headers: {
	// 			"X-RapidAPI-Key": process.env.RAPIDAPI_KEY!,
	// 		},
	// 	},
	// };
	const data = new FormData();
	data.append("image", url);

	const options = {
		method: "POST",
		headers: {
			"X-RapidAPI-Key":
				"370e93cb63msh99564add247574dp1c5407jsnc338f44ffc68",
			"X-RapidAPI-Host":
				"product-background-removal.p.rapidapi.com",
		},
		body: data,
	};

	try {
		const response = await fetch(url, options);
		const responseBody = await response.text(); // Get response body as text
		console.log(response); // Log the response body
		// Attempt to parse response body as JSON
		// const result = JSON.parse(responseBody);
		// console.log(result.imageUrl);
	} catch (error) {
		console.error(error);
	}
};

export const removeBgFromPicsArt = async (url: string) => {
	const options = {
		image_file: url,
	};

	var config = {
		method: "post",
		url: "https://api.removal.ai/3.0/remove",
		headers: {
			"Rm-Token": "Your-Token",
			...options,
		},
		data: options,
	};

	axios(config)
		.then(function (response) {
			console.log(JSON.stringify(response.data));
		})
		.catch(function (error) {
			console.log(error);
		});
};
