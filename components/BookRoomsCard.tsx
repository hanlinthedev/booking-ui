import { Room } from "@/app/bookings/page";
import { ChevronRight, Users } from "lucide-react";
import BookingConfirm from "./BookingConfirm";
import { Button } from "./ui/button";
export default function BookRoomsCard({
	room,
	date,
}: {
	room: Room;
	date: { from: Date; to: Date };
}) {
	return (
		<div
			key={room.id}
			className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
		>
			<div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between">
				<div className="flex-grow">
					<div className="flex items-center mb-2">
						<h2 className="text-2xl font-semibold text-gray-900 mr-4">
							{room.type}
						</h2>
						<span className="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded">
							Room {room.number}
						</span>
					</div>
					<p className="text-gray-600 mb-4">{room.description}</p>
					<div className="flex items-center text-gray-500">
						<Users size={20} className="mr-2" />
						<span>Up to {room.capacity} guests</span>
					</div>
				</div>
				<div className="mt-4 md:mt-0 flex flex-col md:items-end">
					<div className="text-2xl font-bold text-gray-900 mb-2">
						${room.price}
						<span className="text-sm font-normal text-gray-500">/night</span>
					</div>
					<BookingConfirm
						pricePerNight={room.price}
						roomId={room.id}
						roomNo={room.number}
						date={date}
					>
						<Button className="group w-full md:w-auto">
							Book Now
							<ChevronRight
								size={20}
								className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
							/>
						</Button>
					</BookingConfirm>
				</div>
			</div>
		</div>
	);
}
