"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logout } from "@/lib/actions/auth";
import { CreditCard, LogOut, Settings, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface UserMenuProps {
	user: {
		firstName?: string;
		lastName?: string;
		email?: string;
		picture?: string;
	};
}

export default function UserMenu({ user }: UserMenuProps) {
	const router = useRouter();

	const handleLogout = async () => {
		await logout();

		router.refresh();
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="outline-none">
				<Avatar>
					<AvatarImage src={user?.picture} />
					<AvatarFallback>
						{user?.firstName?.[0] || user?.email?.[0] || "U"}
					</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-56">
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem asChild>
					<Link href="/profile" className="cursor-pointer">
						<User className="mr-2 h-4 w-4" />
						Profile
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem asChild>
					<Link href="/profile/bookings" className="cursor-pointer">
						<CreditCard className="mr-2 h-4 w-4" />
						My Bookings
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem asChild>
					<Link href="/profile/settings" className="cursor-pointer">
						<Settings className="mr-2 h-4 w-4" />
						Settings
					</Link>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem
					onClick={handleLogout}
					className="cursor-pointer text-red-600"
				>
					<LogOut className="mr-2 h-4 w-4" />
					Logout
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
