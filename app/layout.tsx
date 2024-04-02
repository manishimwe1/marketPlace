import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "600", "900"],
	variable: "--font-poppins",
});

export const metadata: Metadata = {
	title: "Tech marketPlace",
	description:
		"Better prices | better choices | Fast delivery",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={cn(
					poppins.variable,
					"text-white bg-gray-100 ",
				)}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}

// bg-[#09080d]
