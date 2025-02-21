import { Award, Crown, Diamond, Star } from "lucide-react";

const LoyaltySection = () => {
	const tiers = [
		{
			name: "Standard",
			icon: Star,
			points: "0 - 999",
			discount: "0%",
			color: "text-gray-600",
			benefits: [
				"Member-exclusive rates",
				"Earn points on every stay",
				"Access to special offers",
			],
		},
		{
			name: "Silver",
			icon: Award,
			points: "1,000 - 4,999",
			discount: "5%",
			color: "text-gray-400",
			benefits: [
				"All Standard benefits",
				"5% discount on bookings",
				"Priority check-in",
				"Late checkout when available",
			],
		},
		{
			name: "Gold",
			icon: Crown,
			points: "5,000 - 9,999",
			discount: "10%",
			color: "text-amber-500",
			benefits: [
				"All Silver benefits",
				"10% discount on bookings",
				"Room upgrades when available",
				"Welcome amenity",
			],
		},
		{
			name: "Platinum",
			icon: Diamond,
			points: "10,000+",
			discount: "15%",
			color: "text-sky-400",
			benefits: [
				"All Gold benefits",
				"15% discount on bookings",
				"Guaranteed room upgrades",
				"Executive lounge access",
				"Personalized concierge service",
			],
		},
	];

	return (
		<section id="loyalty-section" className="bg-gray-50 py-20">
			<div className="max-w-7xl mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold mb-4">LuxeStay Rewards</h2>
					<p className="text-gray-600 text-lg max-w-2xl mx-auto">
						Join our loyalty program and enjoy exclusive benefits, discounts,
						and personalized experiences. The more you stay, the more rewards
						you unlock.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{tiers.map((tier) => (
						<div
							key={tier.name}
							className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
						>
							<div className="p-6 border-b border-gray-100">
								<div className={`${tier.color} mb-4`}>
									<tier.icon className="w-12 h-12 mx-auto" />
								</div>
								<h3 className="text-2xl font-bold text-center mb-2">
									{tier.name}
								</h3>
								<p className="text-gray-500 text-center text-sm">
									Points Required
								</p>
								<p className="text-center font-semibold text-lg mb-4">
									{tier.points}
								</p>
								<div className="bg-gray-50 rounded-lg p-3 text-center">
									<p className="text-sm text-gray-600">Discount on Stays</p>
									<p className="text-3xl font-bold text-gray-900">
										{tier.discount}
									</p>
								</div>
							</div>
							<div className="p-6 bg-gray-50 h-full">
								<h4 className="font-semibold mb-4 text-gray-900">
									Member Benefits
								</h4>
								<ul className="space-y-3">
									{tier.benefits.map((benefit, index) => (
										<li
											key={index}
											className="flex items-start text-sm text-gray-600"
										>
											<Star className="w-4 h-4 text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
											<span>{benefit}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>

				<div className="mt-16 text-center">
					<button
						className="px-8 py-4 bg-amber-600 text-white rounded-md font-semibold 
            transition duration-300 hover:bg-amber-700 inline-flex items-center gap-2"
					>
						<Crown className="w-5 h-5" />
						Join LuxeStay Rewards
					</button>
				</div>
			</div>
		</section>
	);
};

export default LoyaltySection;
