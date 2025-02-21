"use server";

import { cookies } from "next/headers";
import { refreshAccessToken } from "./actions/auth";

export async function fetchWithAuth(url: string, options: RequestInit = {}) {
	const cookieStore = cookies();
	let accessToken = cookieStore.get("accessToken");

	if (!accessToken) {
		const refreshed = await refreshAccessToken();
		if (!refreshed) {
			throw new Error("Authentication required");
		}
		accessToken = cookieStore.get("accessToken");
	}

	const response = await fetch(url, {
		...options,
		headers: {
			"Content-Type": "application/json",
			...options.headers,
			Authorization: `Bearer ${accessToken?.value}`,
		},
	});

	if (response.status === 401) {
		const refreshed = await refreshAccessToken();
		if (!refreshed) {
			throw new Error("Authentication required");
		}
		return fetchWithAuth(url, options);
	}

	return response;
}
