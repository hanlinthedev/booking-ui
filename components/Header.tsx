import { BedDouble } from "lucide-react";
import Link from "next/link";
import AuthNav from "./AuthNav";
import MobileNav from "./MobileNav";

export default async function Header() {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container mx-auto px-4 md:px-6 lg:px-8 flex h-16 items-center">
				<Link href="/" className="flex items-center space-x-2">
					<BedDouble className="h-6 w-6" />
					<span className="font-bold">LuxeStay</span>
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex ml-auto items-center gap-4 sm:gap-6">
					<Link
						href="/rooms"
						className="text-sm font-medium hover:underline underline-offset-4"
					>
						Rooms
					</Link>
					<Link
						href="/amenities"
						className="text-sm font-medium hover:underline underline-offset-4"
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
					>
						Testimonials
					</Link>

					<div className="ml-4">
						<AuthNav />
					</div>
				</nav>

				<div className="ml-auto md:hidden flex items-center">
					<MobileNav />
					<div className="ml-4">
						<AuthNav />{" "}
					</div>
				</div>
			</div>
		</header>
	);
}
