// app/unauthorized/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

export default function UnauthorizedPage() {
	const router = useRouter();

	useEffect(() => {
		// Show alert and redirect immediately
		toast("Please log in to access this page");

		router.push("/"); // Redirect happens right after alert is shown
	}, [router]);

	return (
		<div style={styles.container}>
			<div style={styles.alert}>
				<p>Redirecting...</p>
			</div>
		</div>
	);
}

const styles = {
	container: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "100vh",
		backgroundColor: "#f5f5f5",
	},
	alert: {
		padding: "20px",
		backgroundColor: "#fff",
		borderRadius: "8px",
		boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
		textAlign: "center" as const,
	},
};
