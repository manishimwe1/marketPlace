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
				<body className='overflow-y-hidden bg-[#4d2c45]'>
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
					<main className='flex w-full h-full bg-gradient-to-tr from-[#180916] to-[#1a010f] saturate-100 overflow-hidden pb-10'>
						<DashBoardSideNav />
						<div className=' flex-col  w-full  min-h-screen flex-1 shadow-sm shadow-[#c7b7f0]'>
							<DashboardNav />
							<section className=' w-full h-full overflow-y-auto bg-gradient-to-tr from-[#292727] to-[#1b1318] saturate-100 p-4 pb-10  flex flex-col relative '>
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
