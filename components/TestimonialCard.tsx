import { Star } from "lucide-react";
import type React from "react";

interface TestimonialCardProps {
	name: string;
	role: string;
	content: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
	name,
	role,
	content,
}) => {
	return (
		<div className="bg-white p-6 rounded-lg shadow-lg">
			<div className="flex items-center space-x-1 mb-4">
				{[1, 2, 3, 4, 5].map((star) => (
					<Star
						key={star}
						className="h-5 w-5 fill-yellow-400 text-yellow-400"
					/>
				))}
			</div>
			<p className="text-gray-600 mb-4">&ldquo;{content}&rdquo;</p>
			<div className="flex items-center space-x-3">
				<div className="w-12 h-12 bg-gray-300 rounded-full"></div>
				<div>
					<p className="font-semibold">{name}</p>
					<p className="text-sm text-gray-500">{role}</p>
				</div>
			</div>
		</div>
	);
};

export default TestimonialCard;
