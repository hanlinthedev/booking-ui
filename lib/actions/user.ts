"use server";

import { fetchWithAuth } from "../api";

export async function getCurrentUser() {
	try {
		const response = await fetchWithAuth(
			`${process.env.NEXT_PUBLIC_API_URL}/auth/me`
		);
		if (!response.ok) return null;
		return response.json();
	} catch (error) {
		console.error(error);
		return null;
	}
}

export async function getLoyaltyInformation() {
	try {
		const response = await fetchWithAuth(
			`${process.env.NEXT_PUBLIC_API_URL}/loyalty/account`
		);
		if (!response.ok) return null;
		return response.json();
	} catch (error) {
		console.error(error);
		return null;
	}
}
