import DashBoardSideNav from "@/components/DashBoardSideNav";
import Provider from "@/components/SessionProvide";
import NextTopLoader from "nextjs-toploader";
import "../globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Metadata } from "next";
import DashboardNav from "../(dashboard)/dashboard/_components/shared/DashboardNav";

export const metadata: Metadata = {
	title: "MarketPlace Admin",
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
				<body className='min-h-screen w-full relative h-full overflow-hidden text-light-1'>
					<DashboardNav />
					<main className='flex w-full gap-3  relative items-start justify-between overflow-hidden'>
						<DashBoardSideNav />
						<ScrollArea className=' bg-light-2 rounded-lg my-4 h-screen  w-full'>
							<Toaster />
							{children}
						</ScrollArea>
					</main>
				</body>
			</Provider>
		</html>
	);
}

//
