import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

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

export default async function RootLayout({
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
				<NextTopLoader
					color='#2299DD'
					initialPosition={0.08}
					crawlSpeed={200}
					height={3}
					crawl={true}
					showSpinner={true}
					easing='ease'
					speed={200}
					shadow='0 0 10px #2299DD,0 0 5px #2299DD'
				/>
				<Navbar />
				{children}
			</body>
		</html>
	);
}

// bg-[#09080d]
