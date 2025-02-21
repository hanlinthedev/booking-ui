"use client";

import BannerSection from "@/components/BannerSection";
import BookRoomsCard from "@/components/BookRoomsCard";
import { DateRangePicker } from "@/components/DateRangePicker";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { getAvailableRooms } from "@/lib/actions/booking";
import { useState } from "react";
import { DateRange } from "react-day-picker";

export interface Room {
	id: string;
	number: number;
	type: "SINGLE" | "DOUBLE" | "DELUXE" | "SUITE";
	price: number;
	description: string;
	capacity: number;
	createdAt: Date;
	updatedAt: Date;
}

export default function BookingPage() {
	const [date, setDate] = useState<DateRange>();
	const from: Date = date?.from as Date;
	const to: Date = date?.to as Date;
	const [loading, setLoading] = useState(false);
	const [aviliableRooms, setAvilableRooms] = useState<Room[]>([]);
	const [roomTypeFilter, setRoomTypeFilter] = useState("SINGLE");

	const handleFindAvailableRooms = async () => {
		try {
			if (!date) return;
			const from: Date = date.from as Date;
			const to: Date = date.to as Date;
			setLoading(true);
			const rooms = await getAvailableRooms(from, to);

			setAvilableRooms(rooms);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="container mx-auto px-4 py-8">
			<BannerSection
				title="Book Your Stay"
				description="Find the perfect place to stay with us"
				height="h-[60vh]"
				banner="/RoomsBanner.jpg"
				cta={
					<Card className="max-w-2xl mx-auto">
						<CardHeader>
							<CardTitle>Book Your Stay</CardTitle>
							<CardDescription>
								Select your check-in and check-out dates to proceed with booking
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-6">
							<DateRangePicker date={date} onDateChange={setDate} />
						</CardContent>
						<CardFooter>
							<Button
								onClick={handleFindAvailableRooms}
								disabled={!date}
								className="w-full"
							>
								{loading ? "Processing..." : "Find Available Rooms"}
							</Button>
						</CardFooter>
					</Card>
				}
			/>
			<div className="flex items-center bg-gray-50 rounded-xl justify-between py-2 px-4 my-4">
				<h2 className="text-2xl font-semibold text-gray-900">
					Available Rooms
				</h2>
				<div className="flex items-center space-x-4">
					<Select onValueChange={(value) => setRoomTypeFilter(value)}>
						<SelectTrigger className="w-[180px]">
							<SelectValue placeholder="Single" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="SINGLE">Single</SelectItem>
							<SelectItem value="DOUBLE">Double</SelectItem>
							<SelectItem value="SUITE">Suite</SelectItem>
							<SelectItem value="DELUXE">Deluxe</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>
			<div className=" py-8 gap-4 grid grid-cols-1 sm:grid-cols-2 ">
				{aviliableRooms
					?.filter((room) => room.type === roomTypeFilter)
					?.map((room) => (
						<BookRoomsCard key={room.id} date={{ from, to }} room={room} />
					))}
			</div>
		</div>
	);
}
