import { Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
interface RoomCardProps {
	room: {
		id: number;
		type: string;
		description: string;
		price: number;
		capacity: number;
		image: string;
	};
}

export default function RoomCard({ room }: RoomCardProps) {
	return (
		<section
			className={`relative min-h-[80vh] flex items-center ${
				room.id % 2 === 0 ? "bg-black" : "bg-gray-900"
			}`}
		>
			<Image
				src={room.image || "/placeholder.svg"}
				alt={room.type}
				fill
				className="object-cover opacity-40"
			/>
			<div className="relative container mx-auto px-4 py-24 md:py-32">
				<div
					className={`max-w-2xl ${
						room.id % 2 === 0 ? "ml-auto text-right" : ""
					}`}
				>
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
						{room.type}
					</h2>
					<div
						className={`flex items-center gap-2 text-white/90 mb-4 text-lg 
                  ${room.id % 2 === 0 ? "justify-end" : ""}`}
					>
						<Users className="h-5 w-5" />
						<span>Up to {room.capacity} guests</span>
					</div>
					<p className="text-white/80 text-lg mb-6">{room.description}</p>
					<div
						className={`space-y-4 md:space-y-0 md:space-x-4 
                  ${room.id % 2 === 0 ? "text-right" : ""}`}
					>
						<span className="inline-block text-2xl md:text-3xl font-bold text-white mb-4">
							${room.price}
							<span className="text-lg text-white/60"> / night</span>
						</span>
						<Button
							asChild
							size="lg"
							className="bg-white text-black hover:bg-white/90"
						>
							<Link href="/bookings">Book Now</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
