import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LoyaltyFAB from "@/components/LoyaltyFAB";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "LuxeStay | Luxury Hotel Booking",
	description: "Book your perfect luxury stay with LuxeStay",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				{children}
				<Footer />
				<LoyaltyFAB />
				<Toaster />
			</body>
		</html>
	);
}
