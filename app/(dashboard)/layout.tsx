import DashBoardSideNav from "@/components/DashBoardSideNav";
import "../globals.css";
import SearchBox from "@/components/shared/SearchBox";
import {
	LucideMessageSquareQuote,
	MessageSquare,
	MessageSquareDot,
	MessageSquareIcon,
	User2Icon,
} from "lucide-react";
import { BellAlertIcon } from "@heroicons/react/24/solid";
import { BellIcon } from "@heroicons/react/24/outline";
import MobileMenuBar from "./dashboard/_components/MobileMenuBar";
import Image from "next/image";
import Link from "next/link";
import Provider from "@/components/SessionProvide";
import NextTopLoader from "nextjs-toploader";
import DashboardNav from "./dashboard/_components/shared/DashboardNav";

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<Provider>
				<body className='overflow-y-hidden bg-[#8A006B]'>
					<NextTopLoader
						color='purple'
						initialPosition={0.08}
						crawlSpeed={200}
						height={3}
						crawl={true}
						showSpinner={true}
						easing='ease'
						speed={200}
						shadow='0 0 10px #2299DD,0 0 5px #2299DD'
					/>
					<main className='flex w-full h-screen bg-gradient-to-tr from-[#63175c] to-[#b43a80] saturate-100 overflow-hidden'>
						<DashBoardSideNav />
						<div className=' flex-col  w-full  overflow-hidden flex-1 shadow-sm shadow-[#6045a3] h-screen'>
							<DashboardNav />
							<section className=' w-full h-full overflow-y-scroll bg-black/80 p-4  flex flex-col relative '>
								{children}
								{/* bottom navbar */}

								{/* <div className='border absolute  bottom-40 w-full h-fit inset-x-0'>
									<MobileMenuBar />
								</div> */}
							</section>
						</div>
					</main>
				</body>
			</Provider>
		</html>
	);
}

//
