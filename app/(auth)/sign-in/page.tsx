import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { signInActions } from "./_actions/signInAction";
import SignInForm from "./_components/SignInForm";
import { signIn } from "@/auth";

const SigninPage = () => {
	return (
		<section className='w-full h-screen px-4 py-8 lg:py-0 lg:px-0 bg-SignImage bg-right  flex flex-col lg:flex-row justify-start overflow-hidden  items-start'>
			<div className='h-full w-full lg:w-[50%] rounded-3xl  bg-black lg:rounded-r-3xl lg:rounded-l-none px-10 lg:px-20 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50  relative'>
				<div className='flex flex-col gap-2  w-full h-full py-10 lg:py-20'>
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
						<div className='flex flex-col gap-4 w-full'>
							<SignInForm />
							<div className='w-full h-full flex justify-between gap-4 flex-wrap'>
								<form
									action={async () => {
										"use server";
										await signIn(
											"google",
											{
												redirectTo:
													"/dashboard",
											},
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

export default SigninPage;
