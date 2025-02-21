import BannerSection from "@/components/BannerSection";
import LoyaltySection from "@/components/LoyaltySection";
import RoomCard from "@/components/RoomCard";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Luxury Rooms & Suites | LuxeStay Hotel",
	description:
		"Discover our collection of luxurious rooms and suites at LuxeStay. From elegant single rooms to deluxe suites with private terraces, find your perfect stay.",
	keywords:
		"luxury hotel rooms, hotel suites, deluxe suite, premium accommodation, LuxeStay rooms",
	openGraph: {
		title: "Luxury Rooms & Suites | LuxeStay Hotel",
		description:
			"Experience luxury and comfort in our carefully crafted accommodations at LuxeStay Hotel.",
		images: [
			{
				url: "/RoomsBanner.jpg",
				width: 1200,
				height: 630,
				alt: "LuxeStay Hotel Rooms",
			},
		],
	},
};

export default function RoomsPage() {
	const rooms = [
		{
			id: 1,
			type: "DELUXE Suite",
			price: 1299,
			capacity: 6,
			description:
				"Exclusive deluxe suite with private terrace, jacuzzi, and butler service",
			image: "/DeluxeSuite.jpg",
		},
		{
			id: 2,
			type: "Suite",
			price: 699,
			capacity: 4,
			description:
				"Premium suite with separate living area, dining space, and panoramic views",
			image: "/Suite.webp",
		},
		{
			id: 3,
			type: "Double Room",
			price: 399,
			capacity: 3,
			description:
				"Spacious double room with balcony, two queen-size beds, and luxury amenities",
			image: "/Double.avif",
		},
		{
			id: 4,
			type: "Single Room",
			price: 299,
			capacity: 2,
			description:
				"Elegant single room with city view, king-size bed, and marble bathroom",
			image: "/Single.webp",
		},
	];

	return (
		<section className="flex flex-col  ">
			<div>
				<BannerSection
					title="Rooms at LuxeStay"
					description="Experience luxury and comfort in our carefully crafted accommodations"
					height="h-[60vh]"
					banner="/RoomsBanner.jpg"
				/>
			</div>
			<div className="w-full bg-gray-50">
				<div className="container px-4 mx-auto ">
					{rooms.map((room) => (
						<RoomCard room={room} key={room.id} />
					))}
				</div>
			</div>
			<LoyaltySection />
		</section>
	);
}
