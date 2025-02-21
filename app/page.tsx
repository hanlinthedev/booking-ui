import BannerSection from "@/components/BannerSection";
import FeatureItem from "@/components/FeaturesItem";
import LoyaltySection from "@/components/LoyaltySection";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { BedDouble, Utensils, Wifi } from "lucide-react";

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "LuxeStay | Luxury Hotel & Resort Experience",
	description:
		"Experience unparalleled luxury at LuxeStay. Book your perfect getaway with our premium accommodations, world-class amenities, and exceptional service.",
	keywords:
		"luxury hotel, 5-star accommodation, premium resort, LuxeStay hotel, luxury stays, hotel booking",
	openGraph: {
		title: "LuxeStay | Luxury Hotel & Resort Experience",
		description:
			"Discover the epitome of luxury hospitality at LuxeStay. Premium rooms, world-class amenities, and exceptional service await.",
		images: [
			{
				url: "/HeroBg.jpg",
				width: 1200,
				height: 630,
				alt: "LuxeStay Luxury Hotel",
			},
		],
	},
};

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen">
			<main className="flex-1">
				<BannerSection
					title="Welcome to LuxeStay"
					description="Experience unparalleled luxury and comfort"
					cta={
						<Button asChild size="lg">
							<Link href="/rooms">Explore Our Rooms</Link>
						</Button>
					}
					banner="/HeroBg.jpg"
				/>

				<section className="w-full  bg-gray-50">
					<div className="container mx-auto px-4">
						<div className="flex flex-col ">
							<FeatureItem
								icon={BedDouble}
								title="Luxurious Rooms"
								description="Indulge in our spacious and elegantly designed rooms, crafted for ultimate comfort and relaxation. Each room is a sanctuary of luxury, featuring premium bedding, state-of-the-art amenities, and breathtaking views, ensuring a restful and rejuvenating stay."
								imageSrc="/LuxuriousRoom.jpg"
							/>
							<FeatureItem
								icon={Utensils}
								rowReverse={true}
								title="Fine Dining"
								description="Savor exquisite cuisine prepared by our world-class chefs in our award-winning restaurants. From gourmet breakfasts to romantic dinners, our diverse menus cater to every palate, using the finest local and international ingredients to create unforgettable culinary experiences."
								imageSrc="/FineDining.jpg"
							/>
							<FeatureItem
								icon={Wifi}
								title="Modern Amenities"
								description="Enjoy our state-of-the-art facilities designed to enhance your stay. From high-speed Wi-Fi throughout the property to our fully-equipped fitness center, luxurious spa, and business center, we provide everything you need for a comfortable and productive visit."
								imageSrc="/ModernAmenities.webp"
							/>
						</div>
					</div>
				</section>
				<LoyaltySection />

				<section className="w-full py-20 bg-gray-100">
					<div className="container mx-auto px-4">
						<h2 className="text-3xl font-bold text-center mb-12">
							What Our Guests Say
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{[
								{
									name: "Emma Thompson",
									role: "Business Traveler",
									content:
										"LuxeStay exceeded all my expectations. The attention to detail and personalized service made my business trip feel like a luxury vacation.",
								},
								{
									name: "Michael Chen",
									role: "Couple Getaway",
									content:
										"Our anniversary celebration at LuxeStay was unforgettable. The romantic ambiance and stunning views created the perfect setting for our special occasion.",
								},
								{
									name: "Sophia Rodriguez",
									role: "Family Vacation",
									content:
										"From the kid-friendly amenities to the spacious family suites, LuxeStay made our family vacation a delightful experience for both parents and children.",
								},
							].map((testimonial, index) => (
								<TestimonialCard key={index} {...testimonial} />
							))}
						</div>
					</div>
				</section>

				<section className="w-full py-20 bg-primary text-white">
					<div className="container mx-auto px-4 text-center">
						<h2 className="text-3xl font-bold mb-8">
							Ready to Experience Luxury?
						</h2>
						<p className="text-xl mb-8">
							Book your stay now and indulge in the LuxeStay experience
						</p>
						<Button asChild size="lg" variant="secondary">
							<Link href="/rooms">View Our Rooms</Link>
						</Button>
					</div>
				</section>
			</main>
		</div>
	);
}
