"use server";

import axios from "axios";
import fs from "fs";

export const RemoveBgInImage = async (fileURL: string) => {
	console.log("RUN!!");
	const apiKey = process.env.REMOVE_BG_IMAGE_API_KEY!;

	if (!apiKey) {
		console.log("Missing api_Key !!!!!");
		return null; // Return null if apiKey is missing
	}

	try {
		const formData = new FormData();
		formData.append("image_url", fileURL);

		const image = await axios.post(
			"https://api.remove.bg/v1.0/removebg",
			formData,
			{
				responseType: "arraybuffer",
				headers: {
					"X-Api-Key": apiKey,
				},
			},
		);

		if (image.status !== 200) {
			console.error(
				"Error:",
				image.status,
				image.statusText,
			);
			return null; // Return null if there's an error
		}
		const binaryData = fs.readFileSync(image.data);

		// Convert binary data to base64-encoded string
		const base64String =
			Buffer.from(binaryData).toString("base64");

		// Construct the data URL
		const imageUrl = `data:image/png;base64,${base64String}`;

		// Create data URL
		return imageUrl; // Return the image URL
	} catch (error) {
		console.log(error);
		return null; // Return null if there's an error
	}
};
