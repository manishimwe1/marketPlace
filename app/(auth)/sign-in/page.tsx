import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { signInActions } from "./_actions/signInAction";
import SignInForm from "./_components/SignInForm";
import { signIn } from "@/auth";

const SigninPage = () => {
	return (
		<section className='max-container'>
			<div className='flex gap-2 text-stone-950  saturate-100 brightness-75 shadow-md shadow-purple-950/20 rounded-3xl px-12 py-8'>
				<div className='flex flex-col gap-2  w-full h-full'>
					<Link href={"/"}>
						<div className='relative h-14 w-20 cursor-pointer'>
							<h2 className='font-bold  text-3xl text-nowrap text-stone-950'>
								Gura Gurisha
							</h2>
						</div>
					</Link>
					<div className='flex flex-col mt-10 flex-1  w-full gap-2 p-4'>
						<p className='text-purple-950 text-base z-10 mb-4 '>
							Please Enter your Account
							details
						</p>
						<div className='flex flex-col gap-4'>
							<SignInForm />
							<form
								action={async () => {
									"use server";
									await signIn("google");
								}}>
								<Button
									type='submit'
									className='w-full flex gap-4 saturate-200 brightness-100'>
									<Image
										src={"/google.svg"}
										alt='google logo'
										width={20}
										height={20}
									/>
									Sign in with google
								</Button>
							</form>
						</div>
					</div>
				</div>
				<div className='flex flex-col gap-2  w-full h-full'>
					<p>hello</p>
				</div>
			</div>
		</section>
	);
};

export default SigninPage;
