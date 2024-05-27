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
				<body className='overflow-y-hidden bg-[#8A006B]'>
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
					<main className='flex w-full h-full bg-gradient-to-tr from-[#63175c] to-[#b43a80] saturate-100 overflow-hidden pb-10'>
						<DashBoardSideNav />
						<div className=' flex-col  w-full  h-full flex-1 shadow-sm shadow-[#6045a3]'>
							<DashboardNav />
							<section className=' w-full  h-screen bg-black/80 p-4 pb-10  flex flex-col relative '>
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
