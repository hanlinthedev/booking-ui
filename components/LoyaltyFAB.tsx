"use client";
import { Crown } from "lucide-react";
import { useEffect, useState } from "react";

const LoyaltyFAB = () => {
	const [isVisible, setIsVisible] = useState(true);
	const [showTooltip, setShowTooltip] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			// Get the loyalty section element
			const loyaltySection = document.getElementById("loyalty-section");
			if (!loyaltySection) return;

			// Get the section's position relative to viewport
			const rect = loyaltySection.getBoundingClientRect();

			// Hide button if loyalty section is in view (with some padding)
			setIsVisible(rect.top > window.innerHeight + 100 || rect.bottom < -100);
		};

		window.addEventListener("scroll", handleScroll);
		// Initial check
		handleScroll();

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			{isVisible && (
				<div className="fixed bottom-6 right-6 z-50">
					{/* Tooltip */}
					{showTooltip && (
						<div
							className="absolute bottom-full right-0 mb-2 bg-gray-900 text-white text-sm 
              rounded-lg py-2 px-4 whitespace-nowrap"
						>
							Discover LuxeStay Rewards
							{/* Tooltip arrow */}
							<div
								className="absolute bottom-0 right-6 -mb-1 border-4 border-transparent 
                border-t-gray-900"
							></div>
						</div>
					)}

					{/* Button */}
					<button
						onClick={() => {
							const loyaltySection = document.getElementById("loyalty-section");
							loyaltySection?.scrollIntoView({ behavior: "smooth" });
						}}
						onMouseEnter={() => setShowTooltip(true)}
						onMouseLeave={() => setShowTooltip(false)}
						className="bg-amber-600 hover:bg-amber-700 text-white p-4 rounded-full 
              shadow-lg transition-all duration-300 hover:scale-110 group"
					>
						<Crown className="w-6 h-6" />

						{/* Mini label that appears on hover */}
						<span
							className="absolute right-full mr-3 top-1/2 -translate-y-1/2 
              bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 
              group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
						>
							Rewards Program
						</span>
					</button>
				</div>
			)}
		</>
	);
};

export default LoyaltyFAB;
