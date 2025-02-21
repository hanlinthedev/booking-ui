import { getCurrentUser } from "@/lib/actions/user";
import { redirect } from "next/navigation";

export default async function SettingsPage() {
	const user = await getCurrentUser();
	if (!user) redirect("/login");

	return (
		<div className="container mx-auto px-4 py-8 min-h-[65vh]">
			<h1 className="text-3xl font-bold mb-8">Settings</h1>
			<div className="bg-white p-6 rounded-lg shadow-md space-y-6">
				<div>
					<h2 className="text-xl font-semibold mb-4">Notifications</h2>
					<div className="space-y-4">
						<div className="flex items-center justify-between">
							<span>Email Notifications</span>
							<div className="relative inline-flex items-center cursor-pointer">
								<input
									type="checkbox"
									className="sr-only peer"
									defaultChecked
								/>
								<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
							</div>
						</div>
						<div className="flex items-center justify-between">
							<span>Marketing Communications</span>
							<div className="relative inline-flex items-center cursor-pointer">
								<input type="checkbox" className="sr-only peer" />
								<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
							</div>
						</div>
					</div>
				</div>
				<div className="border-t pt-6">
					<h2 className="text-xl font-semibold mb-4">Privacy</h2>
					<div className="space-y-4">
						<div className="flex items-center justify-between">
							<span>Show Profile Picture</span>
							<div className="relative inline-flex items-center cursor-pointer">
								<input
									type="checkbox"
									className="sr-only peer"
									defaultChecked
								/>
								<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
