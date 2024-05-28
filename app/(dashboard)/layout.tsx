import DashBoardSideNav from "@/components/DashBoardSideNav";
import Provider from "@/components/SessionProvide";
import NextTopLoader from "nextjs-toploader";
import "../globals.css";
import DashboardNav from "./dashboard/_components/shared/DashboardNav";

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<Provider>
				<body className='min-h-screen bg-[#4d2c45] overflow-y-scroll'>
					<NextTopLoader
						color='purple'
						initialPosition={0.08}
						crawlSpeed={200}
						height={3}
						crawl={true}
						showSpinner={false}
						easing='ease'
						speed={200}
						shadow='0 0 10px #2299DD,0 0 5px #2299DD'
					/>
					<main className='flex w-full  bg-gradient-to-tr from-[#180916] to-[#1a010f] saturate-100 overflow-hidden'>
						<DashBoardSideNav />
						<div className='flex flex-col w-full shadow-sm shadow-[#c7b7f0] '>
							<DashboardNav />
							<section className='bg-gradient-to-tr from-[#292727] to-[#1b1318] saturate-100 p-4 pb-10 '>
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
