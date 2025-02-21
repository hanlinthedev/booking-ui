import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Footer() {
	return (
		<footer className="w-full py-6 bg-gray-800 text-white">
			<div className="container mx-auto px-4">
				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
					<div>
						<h3 className="font-semibold mb-2">About Us</h3>
						<p className="text-sm text-gray-300">
							LuxeStay offers premium accommodations for the discerning
							traveler.
						</p>
					</div>
					<div>
						<h3 className="font-semibold mb-2">Contact</h3>
						<p className="text-sm text-gray-300">123 Luxury Lane, Cityville</p>
						<p className="text-sm text-gray-300">Phone: (555) 123-4567</p>
					</div>
					<div>
						<h3 className="font-semibold mb-2">Quick Links</h3>
						<nav className="flex flex-col space-y-2 text-sm text-gray-300">
							<Link href="/rooms">Rooms</Link>
							<Link href="#amenities">Amenities</Link>
							<Link href="#testimonials">Testimonials</Link>
						</nav>
					</div>
					<div>
						<h3 className="font-semibold mb-2">Newsletter</h3>
						<form className="flex space-x-2">
							<Input
								type="email"
								placeholder="Your email"
								className="max-w-[180px] bg-gray-700 text-white"
							/>
							<Button type="submit" variant="secondary">
								Subscribe
							</Button>
						</form>
					</div>
				</div>
				<div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-300">
					© {new Date().getFullYear()} LuxeStay. All rights reserved.
				</div>
			</div>
		</footer>
	);
}
