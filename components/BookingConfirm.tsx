"use client";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { confirmBooking } from "@/lib/actions/booking";
import { format } from "date-fns";
import { useState } from "react";
import { BookingSuccessDialog } from "./BookingSuccess";
import { Button } from "./ui/button";

export default function BookingConfirm({
	children,
	roomId,
	roomNo,
	date,
	pricePerNight,
}: {
	children: React.ReactNode;
	roomId: string;
	roomNo: number;
	date: { from: Date; to: Date };
	pricePerNight: number;
}) {
	const [loading, setLoading] = useState(false);
	const [bookingDetail, setBookingDetail] = useState<any>(null);
	const [bookingDetailOpend, setBookingDetailOpend] = useState(true);
	const totalPrice =
		(pricePerNight * (date.to.getTime() - date.from.getTime())) /
		(1000 * 3600 * 24);

	const handleConfirmBooking = async () => {
		try {
			setLoading(true);
			const data = await confirmBooking(roomId, date.from, date.to);
			setBookingDetail(data);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	return bookingDetail ? (
		<BookingSuccessDialog
			open={bookingDetailOpend}
			onOpenChange={() => setBookingDetailOpend(false)}
			bookingDetails={bookingDetail}
		/>
	) : (
		<Dialog>
			<DialogTrigger>{children}</DialogTrigger>

			<DialogContent
				className="sm:max-w-[425px]"
				onInteractOutside={(e) => {
					e.preventDefault();
				}}
			>
				{loading && (
					<div className="absolute rounded-lg flex justify-center items-center w-full h-full bg-black/30 text-3xl font-bold backdrop-blur">
						Processing ....
					</div>
				)}
				<DialogHeader>
					<DialogTitle className="text-2xl">Confirm Your Booking</DialogTitle>
				</DialogHeader>

				<div className="mt-6">
					<div className="rounded-lg bg-muted p-4">
						<div className="text-lg font-semibold text-primary">
							Room {roomNo}
						</div>
					</div>

					<div className="mt-6 space-y-4">
						<div className="flex justify-between items-center">
							<div className="text-sm text-muted-foreground">Check In</div>
							<div className="font-medium">
								{format(date.from, "MMM dd, yyyy")}
							</div>
						</div>
						<div className="flex justify-between items-center">
							<div className="text-sm text-muted-foreground">Check Out</div>
							<div className="font-medium">
								{format(date.to, "MMM dd, yyyy")}
							</div>
						</div>

						<Separator className="my-4" />

						<div className="flex justify-between items-center">
							<div className="text-sm text-muted-foreground">
								Price per night
							</div>
							<div className="font-medium">${pricePerNight.toFixed(2)}</div>
						</div>
						<div className="flex justify-between items-center text-lg font-semibold">
							<div>Total Price</div>
							<div className="text-primary">${totalPrice.toFixed(2)}</div>
						</div>
					</div>

					<div className="mt-8 space-x-4 flex justify-end">
						<DialogClose>
							<Button variant="outline">Cancel</Button>
						</DialogClose>
						<Button className="px-8" onClick={handleConfirmBooking}>
							Confirm Booking
						</Button>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
