import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "../globals.css";
import Provider from "@/components/SessionProvide";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Analytics } from "@vercel/analytics/react";
const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "600", "900"],
	variable: "--font-poppins",
});

export const metadata: Metadata = {
	title: "marketPlace",
	description:
		"Better prices | better choices | Fast delivery",
	icons: {
		icon: "/logo.svg",
	},
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<Provider>
				<body
					className={cn(
						poppins.variable,
						"text-dark-2 bg-gray-100 overflow-hidden ",
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
					<Analytics />
					<ScrollArea className='w-full  h-screen overflow-hidden'>
						<main className=''>{children}</main>
					</ScrollArea>
				</body>
			</Provider>
		</html>
	);
}

// bg-[#09080d]
