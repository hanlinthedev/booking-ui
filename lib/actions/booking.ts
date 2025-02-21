"use server";

import { fetchWithAuth } from "../api";

export async function getAvailableRooms(checkIn: Date, checkOut: Date) {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/bookings/available-rooms?checkIn=${checkIn}&checkOut=${checkOut}`
	);
	if (!res.ok) throw new Error("Failed to fetch data");
	const data = await res.json();
	return data;
}

export async function confirmBooking(
	roomId: string,
	checkIn: Date,
	checkOut: Date
) {
	const res = await fetchWithAuth(
		`${process.env.NEXT_PUBLIC_API_URL}/bookings`,
		{
			method: "POST",
			body: JSON.stringify({
				roomId,
				checkIn,
				checkOut,
			}),
		}
	);

	const data = await res.json();
	if (!res.ok) throw new Error("Failed to fetch data");
	return data;
}
