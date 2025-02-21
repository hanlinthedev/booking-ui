import AmenityCard from "@/components/AmenityCard";
import { Car, Coffee, Dumbbell, Utensils, Wifi, Wine } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Hotel Amenities | LuxeStay",
	description:
		"Explore our world-class amenities including spa, fitness center, restaurants, and more at LuxeStay.",
};

export default function AmenitiesPage() {
	const amenities = [
		{
			icon: Car,
			name: "Swimming Pool",
			description: "Infinity pool with panoramic views",
			size: "large",
			image: "/SwimmingPool.avif",
		},
		{
			icon: Dumbbell,
			name: "Fitness Center",
			description: "State-of-the-art equipment and personal trainers",
			size: "small",
			image: "/FitnessCenter.jpg",
		},
		{
			icon: Wine,
			name: "Luxury Spa",
			description: "Relaxing treatments and massages",
			size: "medium",
			image: "/LuxurySpa.jpg",
		},
		{
			icon: Utensils,
			name: "Fine Dining",
			description: "Multiple restaurants with world-class chefs",
			size: "large",
			image: "/FineDining.webp",
		},
		{
			icon: Wine,
			name: "Bar & Lounge",
			description: "Premium drinks and entertainment",
			size: "medium",
			image: "/BarNLounge.jpeg",
		},
		{
			icon: Wifi,
			name: "High-Speed WiFi",
			description: "Complimentary high-speed internet access",
			size: "small",
			image: "/Wifi.webp",
		},
		{
			icon: Car,
			name: "Valet Parking",
			description: "24/7 secure parking service",
			size: "medium",
			image: "/Parking.jpeg",
		},
		{
			icon: Coffee,
			name: "Room Service",
			description: "24-hour in-room dining",
			size: "small",
			image: "/RoomService.jpg",
		},
	];
	return (
		<div className="min-h-screen bg-gray-100">
			<div className="container mx-auto px-4 py-24">
				<div className="text-center mb-20">
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
						Hotel Amenities
					</h1>
					<p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
						Indulge in our world-class facilities and services designed for your
						ultimate comfort and convenience
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{amenities.map((amenity) => (
						<AmenityCard amenity={amenity} key={amenity.name} />
					))}
				</div>
			</div>
		</div>
	);
}
