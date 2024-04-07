"use client";

import { SessionProvider } from "next-auth/react";

export default async function Provider({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<SessionProvider>{children}</SessionProvider>
		</html>
	);
}
