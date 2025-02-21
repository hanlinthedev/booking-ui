"use server";

import { cookies } from "next/headers";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function refreshAccessToken() {
	const cookieStore = cookies();
	const refreshToken = cookieStore.get("refreshToken");

	if (!refreshToken) {
		await logout();
		return;
	}

	try {
		const response = await fetch(`${API_URL}/auth/refresh`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ refreshToken: refreshToken.value }),
		});

		const data = await response.json();
		if (!data.accessToken || !data.refreshToken) {
			await logout();
			return null;
		}
		if (data.accessToken) {
			cookieStore.set("accessToken", data.accessToken, {
				httpOnly: true,
				secure: process.env.NODE_ENV === "production",
				sameSite: "lax",
				maxAge: 15 * 60, // 15 minutes
			});
			if (data.refreshToken) {
				cookieStore.set("refreshToken", data.refreshToken, {
					httpOnly: true,
					secure: process.env.NODE_ENV === "production",
					sameSite: "lax",
					maxAge: 7 * 24 * 60 * 60, // 7 days
				});
			}
			return true;
		}
	} catch (error) {
		await logout();
		console.error("Error refreshing access token:", error);
		return null;
	}
}

export async function logout() {
	const cookieStore = cookies();
	const refreshToken = cookieStore.get("refreshToken");

	if (refreshToken) {
		await fetch(`${API_URL}/auth/logout`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ refreshToken: refreshToken.value }),
		});
	}

	cookies().delete("accessToken");
	cookies().delete("refreshToken");
}
