import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { getCurrentUser, getLoyaltyInformation } from "@/lib/actions/user";
import { Award, Mail, User } from "lucide-react";
export const dynamic = "force-dynamic";

export default async function ProfilePage() {
	const user = await getCurrentUser();
	const loyalty = await getLoyaltyInformation();

	return (
		<div className="container mx-auto py-10 min-h-[65vh]">
			<h1 className="text-3xl font-bold mb-8">Profile</h1>

			<div className="grid gap-6 md:grid-cols-2">
				{/* Personal Information */}
				<Card>
					<CardHeader>
						<CardTitle>Personal Information</CardTitle>
						<CardDescription>
							Your personal details and contact information
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="flex items-center space-x-4">
							<User className="h-5 w-5 text-muted-foreground" />
							<div className="space-y-0.5">
								<Label className="text-sm text-muted-foreground">Name</Label>
								<div className="font-medium">
									{user.firstName} {user.lastName}
								</div>
							</div>
						</div>
						<div className="flex items-center space-x-4">
							<Mail className="h-5 w-5 text-muted-foreground" />
							<div className="space-y-0.5">
								<Label className="text-sm text-muted-foreground">Email</Label>
								<div className="font-medium">{user.email}</div>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Loyalty Program */}
				<Card>
					<CardHeader>
						<div className="flex items-center justify-between">
							<div>
								<CardTitle>Loyalty Program</CardTitle>
								<CardDescription>Your rewards and tier status</CardDescription>
							</div>
							<Badge variant="secondary" className="uppercase">
								{loyalty.tier}
							</Badge>
						</div>
					</CardHeader>
					<CardContent>
						<div className="space-y-6">
							<div className="flex items-center space-x-4">
								<Award className="h-5 w-5 text-primary" />
								<div className="space-y-0.5">
									<Label className="text-sm text-muted-foreground">
										Current Points
									</Label>
									<div className="font-medium text-2xl">{loyalty.points}</div>
								</div>
							</div>

							<Separator />

							<div className="space-y-2">
								<Label className="text-sm text-muted-foreground">
									Next Tier Progress
								</Label>
								<div className="space-y-2">
									<div className="flex justify-between text-sm">
										<span>{loyalty.tier}</span>
										<span>{loyalty.nextTier.tier}</span>
									</div>
									<div className="h-2 bg-muted rounded-full overflow-hidden">
										<div
											className="h-full bg-primary transition-all duration-300 rounded-full"
											style={{
												width: `${
													(loyalty.points /
														(loyalty.points + loyalty.nextTier.pointsNeeded)) *
													100
												}%`,
											}}
										/>
									</div>
									<div className="text-sm text-muted-foreground">
										{loyalty.nextTier.pointsNeeded} points needed for{" "}
										{loyalty.nextTier.tier}
									</div>
								</div>
							</div>

							<div className="text-xs text-muted-foreground">
								Member since {new Date(loyalty.createdAt).toLocaleDateString()}
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
