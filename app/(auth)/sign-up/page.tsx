import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import { signIn } from "@/auth";
import SignInForm from "../sign-in/_components/SignInForm";

const SignupPage = () => {
	return (
		<section className='w-full h-screen  bg-SignImage bg-right  flex justify-start overflow-hidden  items-start'>
			<div className='h-full w-[50%] bg-black rounded-r-3xl  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50  relative'>
				<div className='flex flex-col gap-2  w-full h-full p-20 shadow-md shadow-black rounded-r-3xl'>
					<Link href={"/"}>
						<div className='relative h-14 w-20 cursor-pointer'>
							<h2 className='font-bold  text-3xl text-nowrap  text-center text-purple-200'>
								Gura Gurisha
							</h2>
						</div>
					</Link>
					<div className='flex flex-col h-fit w-full gap-2 p-4'>
						<p className='text-purple-400 text-base z-10 mb-4 '>
							Please Enter your Account
							details
						</p>
						<div className='flex flex-col gap-4'>
							<SignInForm />
							<div className='w-full h-full flex justify-between gap-4'>
								<form
									action={async () => {
										"use server";
										await signIn(
											"google",
										);
									}}
									className='w-full'>
									<Button
										type='submit'
										className='w-full flex gap-4 bg-gradient'>
										<Image
											src={
												"/google.svg"
											}
											alt='google logo'
											width={20}
											height={20}
										/>
										Sign in with google
									</Button>
								</form>
								<Button
									type='submit'
									className='w-full flex gap-4 bg-gradient'>
									<Image
										src={
											"/facebook.svg"
										}
										alt='google logo'
										width={20}
										height={20}
									/>
									Sign in with Facebook
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SignupPage;
