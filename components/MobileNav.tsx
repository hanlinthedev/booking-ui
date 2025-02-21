"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function MobileNav() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className="md:hidden">
			<button className="ml-auto" onClick={() => setIsMenuOpen(!isMenuOpen)}>
				{isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
			</button>

			{isMenuOpen && (
				<div className="absolute top-16 left-0 right-0 bg-background border-b">
					<nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
						<Link
							href="/rooms"
							className="text-sm font-medium hover:underline underline-offset-4"
							onClick={() => setIsMenuOpen(false)}
						>
							Rooms
						</Link>
						<Link
							href="/amenities"
							className="text-sm font-medium hover:underline underline-offset-4"
							onClick={() => setIsMenuOpen(false)}
						>
							Amenities
						</Link>
						<Link
							href="/bookings"
							className="text-sm font-medium hover:underline underline-offset-4"
						>
							Bookings
						</Link>
						<Link
							href="/testimonials"
							className="text-sm font-medium hover:underline underline-offset-4"
							onClick={() => setIsMenuOpen(false)}
						>
							Testimonials
						</Link>
					</nav>
				</div>
			)}
		</div>
	);
}
