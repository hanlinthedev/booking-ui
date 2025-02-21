import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { format } from "date-fns";
import { Award, CalendarDays, Check } from "lucide-react";
import Link from "next/link";

interface BookingDetails {
	booking: {
		id: string;
		userId: string;
		roomId: string;
		checkIn: string;
		checkOut: string;
		totalPrice: number;
		depositAmount: number;
		status: string;
		createdAt: string;
		updatedAt: string;
	};
	priceDetails: {
		basePrice: number;
		discount: number;
		discountedPrice: number;
		depositAmount: number;
		nights: number;
	};
	loyalty: {
		points: number;
		tier: string;
	};
}

interface BookingSuccessDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	bookingDetails: BookingDetails;
}

export function BookingSuccessDialog({
	open,
	onOpenChange,
	bookingDetails,
}: BookingSuccessDialogProps) {
	const { booking, priceDetails, loyalty } = bookingDetails;
	const checkInDate = new Date(booking.checkIn);
	const checkOutDate = new Date(booking.checkOut);

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="sm:max-w-[500px]">
				<DialogHeader>
					<div className="flex items-center space-x-2">
						<Check className="h-6 w-6 text-primary" />
						<DialogTitle className="text-2xl">Booking Confirmed</DialogTitle>
					</div>
				</DialogHeader>

				<div className="mt-6">
					{/* Status Banner */}
					{/* <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
						<div className="flex items-center space-x-2">
							<AlertCircle className="h-5 w-5 text-amber-500" />
							<div className="text-sm text-amber-800">
								<span className="font-medium">Deposit Required</span> - Please
								proceed with the deposit payment to secure your booking
							</div>
						</div>
					</div> */}

					{/* Booking Details */}
					<div className="space-y-6">
						<div className="bg-muted rounded-lg p-4">
							<div className="flex items-start space-x-3">
								<CalendarDays className="h-5 w-5 text-muted-foreground mt-0.5" />
								<div className="space-y-1">
									<div className="text-sm text-muted-foreground">
										Stay Duration
									</div>
									<div className="font-medium">
										{format(checkInDate, "MMM dd, yyyy")} -{" "}
										{format(checkOutDate, "MMM dd, yyyy")}
									</div>
									<div className="text-sm text-muted-foreground">
										{priceDetails.nights} nights
									</div>
								</div>
							</div>
						</div>

						{/* Loyalty Information */}
						<div className="bg-green-400/20 rounded-lg p-4">
							<div className="flex items-start space-x-3">
								<Award className="h-5 w-5 text-primary mt-0.5" />
								<div className="space-y-1">
									<div className="text-sm text-primary">Loyalty Rewards</div>
									<div className="font-medium">
										{loyalty.points} points earned
									</div>
									<div className="text-sm text-muted-foreground">
										Current Tier: {loyalty.tier}
									</div>
								</div>
							</div>
						</div>

						{/* Price Breakdown */}
						<div className="space-y-3">
							<div className="flex justify-between text-sm">
								<span className="text-muted-foreground">Base Price</span>
								<span>${priceDetails.basePrice.toFixed(2)}</span>
							</div>
							{priceDetails.discount > 0 && (
								<div className="flex justify-between text-sm">
									<span className="text-muted-foreground">Discount</span>
									<span className="text-green-600">
										-${priceDetails.discount.toFixed(2)}
									</span>
								</div>
							)}
							<Separator />
							<div className="flex justify-between">
								<span className="font-medium">Total Price</span>
								<span className="font-medium">
									${priceDetails.discountedPrice.toFixed(2)}
								</span>
							</div>
							<div className="flex justify-between text-sm bg-primary/5 p-3 rounded-lg">
								<span className="font-medium text-primary">
									Required Deposit
								</span>
								<span className="font-medium text-primary">
									${priceDetails.depositAmount.toFixed(2)}
								</span>
							</div>
						</div>

						{/* Booking Reference */}
						<div className="text-sm text-muted-foreground">
							Booking Reference:{" "}
							<span className="font-mono">{booking.id.slice(0, 8)}</span>
						</div>

						{/* Action Buttons */}
						<div className="flex flex-col sm:flex-row sm:justify-end space-y-2 sm:space-y-0 sm:space-x-2">
							<Button variant="outline" onClick={() => onOpenChange(false)}>
								Book Again
							</Button>

							<Button asChild className="sm:w-auto">
								<Link href={`/profile/bookings`}>My Bookings</Link>
							</Button>
						</div>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
