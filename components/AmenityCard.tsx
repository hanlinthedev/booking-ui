import { cn } from "@/lib/utils";
import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface AmenityCardProps {
	amenity: {
		name: string;
		description: string;
		image: string;
		icon: ForwardRefExoticComponent<
			Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
		>;
		size: string;
	};
}
export default function AmenityCard({ amenity }: AmenityCardProps) {
	const IconComponent = amenity.icon;
	return (
		<div
			key={amenity.name}
			className={cn(
				"group relative overflow-hidden",
				"bg-cover bg-center bg-no-repeat",
				"rounded-2xl transition-all duration-500 ease-out",
				"hover:shadow-xl hover:-translate-y-1",
				amenity.size === "large" && "md:col-span-2 lg:col-span-2",
				amenity.size === "medium" && "md:col-span-2 lg:col-span-1",
				"animate-fade-up [--animation-delay:200ms]",
				"[&:nth-child(2)]:animate-delay-200",
				"[&:nth-child(3)]:animate-delay-300",
				"[&:nth-child(4)]:animate-delay-400",
				"[&:nth-child(5)]:animate-delay-500",
				"[&:nth-child(6)]:animate-delay-600",
				"[&:nth-child(7)]:animate-delay-700",
				"[&:nth-child(8)]:animate-delay-800"
			)}
			style={{
				backgroundImage: `url(${amenity.image})`,
				height:
					amenity.size === "large"
						? "400px"
						: amenity.size === "medium"
						? "300px"
						: "250px",
			}}
		>
			<div className="absolute inset-0 bg-gradient-to-t from-gray-100/80 to-white/50" />

			<div className="relative h-full p-8 flex flex-col justify-between">
				<div className="flex items-start justify-between">
					<IconComponent
						className={cn(
							"transition-all duration-500 ease-out",
							"text-primary",
							amenity.size === "large" ? "h-12 w-12" : "h-8 w-8"
						)}
					/>
					<div className="h-1 w-12 bg-primary rounded-full transform origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
				</div>

				<div>
					<h3
						className={cn(
							"font-bold mb-2 transition-all duration-500 text-gray-900",
							amenity.size === "large" ? "text-3xl" : "text-2xl"
						)}
					>
						{amenity.name}
					</h3>
					<p className="text-gray-600 transform translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
						{amenity.description}
					</p>
				</div>
			</div>

			<div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
		</div>
	);
}
