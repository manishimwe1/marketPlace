"use client";

import { SessionProvider } from "next-auth/react";

export default function Provider({
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
