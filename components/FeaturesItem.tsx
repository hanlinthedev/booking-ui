import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import type React from "react";

interface FeatureItemProps {
	icon: LucideIcon;
	title: string;
	description: string;
	imageSrc: string;
	rowReverse?: boolean;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
	icon: Icon,
	title,
	description,
	imageSrc,
	rowReverse = false,
}) => {
	return (
		<div className="relative flex  items-stretch  shadow-muted  h-[500px] ">
			<div className="w-full h-full absolute z-0">
				<Image
					src={imageSrc || "/placeholder.svg"}
					layout="fill"
					objectFit="cover"
					alt={title}
				/>
			</div>
			<div
				className={`w-full h-full flex flex-col justify-center p-6 ${
					rowReverse ? "bg-gradient-to-l  items-end " : "bg-gradient-to-r"
				} from-black/90 to-transparent  absolute z-20`}
			>
				<div className="sm:w-1/2 w-full p-8">
					 {" "}
					<div className="flex items-center mb-2">
						<Icon className="w-6 h-6 text-white mr-2" />
						<h3 className="text-xl font-semibold text-white">{title}</h3>
					</div>
					<p className="text-gray-200 ">{description}</p>
				</div>
			</div>
		</div>
	);
};

export default FeatureItem;
