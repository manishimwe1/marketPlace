import DashBoardSideNav from "@/components/DashBoardSideNav";
import Provider from "@/components/SessionProvide";
import NextTopLoader from "nextjs-toploader";
import "../globals.css";
import DashboardNav from "./dashboard/_components/shared/DashboardNav";
import { Toaster } from "@/components/ui/toaster";
import { ScrollArea } from "@/components/ui/scroll-area";

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<Provider>
				<body className='min-h-screen w-full relative h-full bg-gradient-to-tr from-[#180916] to-[#1a010f] backdrop:filter backdrop-saturate-150 overflow-hidden'>
					<NextTopLoader
						color='blue'
						initialPosition={0.08}
						crawlSpeed={200}
						height={3}
						crawl={true}
						showSpinner={false}
						easing='ease'
						speed={200}
						shadow='0 0 10px #2299DD,0 0 5px #2299DD'
					/>

					<DashboardNav />
					<main className='flex w-full gap-3 bg-bgImg  h-[calc(h-full-20px)]  relative items-start justify-between overflow-hidden'>
						<DashBoardSideNav />
						<ScrollArea className=' shadow-md shadow-purple-700/20  h-screen !px-3 w-full pb-5'>
							{children}
						</ScrollArea>
					</main>
					<div className='absolute  py-4 w-full h-20 top-0 lg:bottom-0 inset-x-0 lg:right-2 flex items-center justify-center'>
						<Toaster />
					</div>
				</body>
			</Provider>
		</html>
	);
}

//
