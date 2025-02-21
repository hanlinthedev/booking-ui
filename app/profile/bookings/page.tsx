import { fetchWithAuth } from "@/lib/api";

async function getBookings() {
	const res = await fetchWithAuth(
		`${process.env.NEXT_PUBLIC_API_URL}/bookings`
	);
	if (!res.ok) return null;
	return res.json();
}

export const dynamic = 'force-dynamic'
export default async function BookingsPage() {
	const bookings = await getBookings();
	console.log(bookings);

	return (
		<div className="container mx-auto px-4 py-8 min-h-[65vh]">
			<h1 className="text-3xl font-bold mb-8">My Bookings</h1>
			<div className="grid gap-6">
				{bookings.map(
					(booking: {
						id: string;
						room: { type: string; number: string };
						checkIn: string;
						checkOut: string;
						status: string;
						totalPrice: number;
					}) => (
						<div key={booking.id} className="bg-white p-6 rounded-lg shadow-md">
							<div className="flex justify-between items-start">
								<div>
									<h3 className="text-xl font-semibold mb-2">
										{booking.room.type}
									</h3>
									<span className="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded">
										Room {booking.room.number}
									</span>
									<p className="text-gray-600">
										{new Date(booking.checkIn).toLocaleDateString()} -{" "}
										{new Date(booking.checkOut).toLocaleDateString()}
									</p>
								</div>
								<span
									className={`px-3 py-1 rounded-full text-sm ${
										booking.status === "CONFIRMED"
											? "bg-green-100 text-green-800"
											: booking.status === "PENDING_DEPOSIT"
											? "bg-yellow-100 text-yellow-800"
											: "bg-red-100 text-red-800"
									}`}
								>
									{booking.status}
								</span>
							</div>
							<div className="mt-4 border-t pt-4">
								<p className="text-gray-600">
									Total Price: ${booking.totalPrice}
								</p>
							</div>
						</div>
					)
				)}
			</div>
		</div>
	);
}
