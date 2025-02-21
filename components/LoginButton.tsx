"use client";

import { Button } from "./ui/button";

export default function LoginButton() {
	const handleLogin = () => {
		// This will start Google OAuth flow
		window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google`;
	};

	return (
		<Button onClick={handleLogin} variant="secondary">
			<span className="hidden md:block">Sign in with Google</span>
			<span className="ml-auto md:hidden">G</span>
		</Button>
	);
}
